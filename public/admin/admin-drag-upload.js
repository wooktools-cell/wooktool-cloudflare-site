(function () {
  "use strict";

  var overlay;
  var toast;
  var dragDepth = 0;
  var activeDropTarget = null;
  var supportedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

  function hasImageFiles(event) {
    var items = event.dataTransfer && event.dataTransfer.items;
    if (!items || !items.length) return false;

    return Array.prototype.some.call(items, function (item) {
      return item.kind === "file" && /^image\//.test(item.type || "");
    });
  }

  function getImageFiles(event) {
    var files = event.dataTransfer && event.dataTransfer.files;
    if (!files || !files.length) return [];

    return Array.prototype.filter.call(files, function (file) {
      return /^image\//.test(file.type || "") || supportedTypes.indexOf(file.type) !== -1;
    });
  }

  function ensureOverlay() {
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.className = "wooktools-drag-upload-overlay";
    overlay.innerHTML = [
      '<div class="wooktools-drag-upload-panel">',
      '<strong>Drop images to upload</strong>',
      '<span>Use 1000 x 1000 px product images when possible.</span>',
      '<small>Images are saved to /images/uploads when the entry is published.</small>',
      "</div>"
    ].join("");

    document.body.appendChild(overlay);
    return overlay;
  }

  function ensureToast() {
    if (toast) return toast;

    toast = document.createElement("div");
    toast.className = "wooktools-drag-upload-toast";
    document.body.appendChild(toast);
    return toast;
  }

  function showOverlay() {
    ensureOverlay().classList.add("is-visible");
  }

  function hideOverlay() {
    if (overlay) overlay.classList.remove("is-visible");
    dragDepth = 0;
  }

  function showToast(message, type) {
    var node = ensureToast();
    node.textContent = message;
    node.dataset.type = type || "info";
    node.classList.add("is-visible");

    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(function () {
      node.classList.remove("is-visible");
    }, 4600);
  }

  function isHidden(element) {
    var style = window.getComputedStyle(element);
    return style.display === "none" || style.visibility === "hidden";
  }

  function inputScore(input) {
    if (!input || input.disabled) return -1;

    var accept = (input.getAttribute("accept") || "").toLowerCase();
    var label = [
      input.getAttribute("aria-label") || "",
      input.getAttribute("name") || "",
      input.getAttribute("id") || "",
      input.className || ""
    ].join(" ").toLowerCase();
    var container = input.closest('[role="dialog"], [class*="media"], [class*="upload"], [class*="image"]');
    var score = 0;

    if (!accept || accept.indexOf("image") !== -1 || accept.indexOf(".jpg") !== -1 || accept.indexOf(".png") !== -1 || accept.indexOf(".webp") !== -1) {
      score += 20;
    }

    if (label.indexOf("image") !== -1 || label.indexOf("media") !== -1 || label.indexOf("upload") !== -1) score += 10;
    if (container) score += 20;
    if (!isHidden(input)) score += 5;
    if (input.multiple) score += 3;

    return score;
  }

  function findFileInput() {
    var inputs = Array.prototype.slice.call(document.querySelectorAll('input[type="file"]'));
    var best = null;
    var bestScore = -1;

    inputs.forEach(function (input) {
      var score = inputScore(input);
      if (score > bestScore) {
        best = input;
        bestScore = score;
      }
    });

    return bestScore >= 0 ? best : null;
  }

  function assignFilesToInput(input, files) {
    var transfer = new DataTransfer();

    files.forEach(function (file) {
      transfer.items.add(file);
    });

    input.files = transfer.files;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function waitForFileInput(timeout) {
    var startedAt = Date.now();

    return new Promise(function (resolve) {
      function check() {
        var input = findFileInput();
        if (input) {
          resolve(input);
          return;
        }

        if (Date.now() - startedAt >= timeout) {
          resolve(null);
          return;
        }

        window.setTimeout(check, 100);
      }

      check();
    });
  }

  function buttonText(button) {
    return (button.textContent || button.getAttribute("aria-label") || button.getAttribute("title") || "").trim().toLowerCase();
  }

  function looksLikeMediaButton(button) {
    var text = buttonText(button);
    return /choose|select|browse|upload|media|image|file/.test(text) && !/publish|save|delete|remove|cancel/.test(text);
  }

  function findMediaButton(context) {
    var scope = context && context.closest ? context.closest("section, fieldset, form, div") : document;
    var scopedButtons = scope ? Array.prototype.slice.call(scope.querySelectorAll("button, [role='button']")) : [];
    var localButton = scopedButtons.find(looksLikeMediaButton);
    if (localButton) return localButton;

    return Array.prototype.slice.call(document.querySelectorAll("button, [role='button']")).find(looksLikeMediaButton) || null;
  }

  async function tryUpload(files) {
    var input = findFileInput();

    if (!input) {
      var button = findMediaButton(activeDropTarget);
      if (button) {
        button.click();
        input = await waitForFileInput(1200);
      }
    }

    if (!input) {
      showToast("Open an image field or Media Library first, then drop images again.", "warning");
      return false;
    }

    try {
      assignFilesToInput(input, files);
      showToast(files.length + " image" + (files.length > 1 ? "s" : "") + " added. Publish to save changes.", "success");
      return true;
    } catch (error) {
      showToast("Drag upload was blocked by the browser. Use the Upload button in the Media Library.", "warning");
      return false;
    }
  }

  function addHint(target) {
    if (!target || target.dataset.wooktoolsDragHint === "true") return;

    var hint = document.createElement("div");
    hint.className = "wooktools-drag-upload-hint";
    hint.textContent = "Tip: drag image files here to upload. Recommended product images: 1000 x 1000 px.";
    target.dataset.wooktoolsDragHint = "true";
    target.insertBefore(hint, target.firstChild);
  }

  function enhanceVisibleUploadAreas() {
    var selectors = [
      '[role="dialog"]',
      '[class*="MediaLibrary"]',
      '[class*="media-library"]',
      '[class*="ImageControl"]',
      '[class*="image-control"]'
    ];

    selectors.forEach(function (selector) {
      Array.prototype.forEach.call(document.querySelectorAll(selector), addHint);
    });
  }

  function installStyles() {
    var style = document.createElement("style");
    style.textContent = [
      ".wooktools-drag-upload-overlay{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.56);opacity:0;pointer-events:none;transition:opacity .14s ease;font-family:Inter,Arial,sans-serif}",
      ".wooktools-drag-upload-overlay.is-visible{opacity:1;pointer-events:auto}",
      ".wooktools-drag-upload-panel{width:min(520px,calc(100vw - 40px));border:2px dashed #f97316;border-radius:14px;background:#111827;color:#fff;padding:34px;text-align:center;box-shadow:0 24px 80px rgba(0,0,0,.32)}",
      ".wooktools-drag-upload-panel strong{display:block;font-size:28px;line-height:1.2;margin-bottom:10px}",
      ".wooktools-drag-upload-panel span{display:block;font-size:16px;color:#fed7aa;margin-bottom:8px}",
      ".wooktools-drag-upload-panel small{display:block;color:#d1d5db;font-size:13px}",
      ".wooktools-drag-upload-toast{position:fixed;right:22px;bottom:22px;z-index:2147483647;max-width:360px;border-radius:10px;background:#111827;color:#fff;padding:13px 16px;font:14px/1.45 Inter,Arial,sans-serif;box-shadow:0 18px 44px rgba(15,23,42,.24);opacity:0;transform:translateY(8px);pointer-events:none;transition:opacity .14s ease,transform .14s ease}",
      ".wooktools-drag-upload-toast.is-visible{opacity:1;transform:translateY(0)}",
      ".wooktools-drag-upload-toast[data-type='success']{background:#14532d}",
      ".wooktools-drag-upload-toast[data-type='warning']{background:#7c2d12}",
      ".wooktools-drag-upload-hint{margin:8px 0 12px;border:1px dashed #fb923c;border-radius:8px;background:#fff7ed;color:#7c2d12;padding:10px 12px;font:13px/1.45 Inter,Arial,sans-serif}"
    ].join("");
    document.head.appendChild(style);
  }

  function installDragHandlers() {
    document.addEventListener("dragenter", function (event) {
      if (!hasImageFiles(event)) return;
      event.preventDefault();
      if (!event.target.closest || !event.target.closest(".wooktools-drag-upload-overlay")) {
        activeDropTarget = event.target;
      }
      dragDepth += 1;
      showOverlay();
    });

    document.addEventListener("dragover", function (event) {
      if (!hasImageFiles(event)) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
      if (!event.target.closest || !event.target.closest(".wooktools-drag-upload-overlay")) {
        activeDropTarget = event.target;
      }
      showOverlay();
    });

    document.addEventListener("dragleave", function () {
      dragDepth = Math.max(0, dragDepth - 1);
      if (dragDepth === 0) hideOverlay();
    });

    document.addEventListener("drop", function (event) {
      if (!hasImageFiles(event)) return;
      event.preventDefault();
      hideOverlay();

      var files = getImageFiles(event);
      if (!files.length) {
        showToast("Only image files can be uploaded here.", "warning");
        return;
      }

      tryUpload(files);
    });
  }

  function init() {
    installStyles();
    installDragHandlers();
    enhanceVisibleUploadAreas();

    var observer = new MutationObserver(enhanceVisibleUploadAreas);
    observer.observe(document.body, { childList: true, subtree: true });

    window.wooktoolsDragUpload = {
      version: "1.0.0",
      findFileInput: findFileInput
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
