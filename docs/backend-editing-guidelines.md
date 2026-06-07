# WOOKTOOL 后台编辑规范表

这份规范用于后台新增或修改产品、工厂图片、博客文章和 SEO 页面。目标是保持网站风格统一、图片加载快、产品文案专业，并方便后续做 Google SEO。

## 1. 产品图片规范

| 图片类型 | 后台字段 | 建议尺寸 | 文件格式 | 背景 | 数量 | 命名建议 | 用途 |
|---|---|---:|---|---|---:|---|---|
| 产品主图 | Main Image | 1000 x 1000 px | JPG / PNG / WebP | 纯白色 | 1 张 | `product-name-main.jpg` | 产品卡片、产品详情页首图、分享图 |
| 产品详情图 1 | Detail Images | 1000 x 1000 px | JPG / PNG / WebP | 纯白色 | 1 张 | `product-name-detail-1.jpg` | 展示结构、材质、功能细节 |
| 产品详情图 2 | Detail Images | 1000 x 1000 px | JPG / PNG / WebP | 纯白色 | 1 张 | `product-name-detail-2.jpg` | 展示包装、配件、应用场景 |
| 工厂图片 | Factory Gallery | 1000 x 720 px 或 4:3 | JPG / WebP | 真实工厂照片 | 按模块上传 | `factory-production-line.jpg` | 增强客户信任 |
| 博客封面图 | Cover Image | 1200 x 630 px | JPG / WebP | 清晰、专业 | 1 张，可选 | `blog-topic-cover.jpg` | 社交分享和文章视觉 |

注意：产品主图必须统一 1:1。不要在主图背景添加浅橙、浅蓝、渐变、圆形装饰或购物平台风格元素。

## 2. 产品基础字段规范

| 后台字段 | 是否必填 | 推荐写法 | 示例 |
|---|---|---|---|
| Display Order | 必填 | 用数字控制显示顺序。同分类产品建议连续编号。 | `2` |
| URL Slug | 必填 | 小写英文，用短横线连接，不要空格，不要中文。 | `compact-tape-measure` |
| Product Name | 必填 | 产品名称简洁清楚，包含产品类型。 | `Compact Tape Measure` |
| Category | 必填 | 只能选已有分类，避免新建相近分类。 | `Tape Measures` |
| Main Image | 必填 | 上传 1000 x 1000 白底产品主图。 | `/images/uploads/compact-tape-measure-main.jpg` |
| Detail Images | 建议必填 | 最多 2 张，上传 1000 x 1000 白底产品详情图，优先展示结构、包装、应用细节。 | `detail-1`, `detail-2` |
| Short Summary | 必填 | 1 句话，130-180 个英文字符左右，包含产品、核心特点、买家对象。 | 见第 3 节 |
| Selling Points | 必填 | 3 条最佳，每条 4-10 个英文单词。 | `Magnetic hook and shockproof shell` |
| Specifications | 必填 | 用标准参数表，不要把所有信息堆在 Summary。 | 见第 4 节 |
| Quality Notes | 必填 | 3-5 条，强调检查和稳定交付。 | `Assembly process and function testing` |
| Target Buyers | 必填 | 写目标客户类型。 | `Importers, distributors, wholesalers, and private-label brands` |

## 3. Short Summary 写法

| 规则 | 说明 |
|---|---|
| 长度 | 建议 1 句话，130-180 个英文字符左右。 |
| 关键词 | 自然包含产品名、custom logo、OEM、packaging、private-label、B2B buyer 等，不要堆词。 |
| 语气 | 面向采购商、进口商、品牌商，不写零售广告语。 |
| 禁止 | 不写 `best quality`, `hot sale`, `cheap price`, `100% perfect` 这类低质表达。 |

推荐公式：

```text
[Product name] with [key feature 1], [key feature 2], and [custom option] for [target buyers or market].
```

示例：

```text
Compact tape measure with easy-read dual-side steel blade, magnetic hook, shockproof shell, and custom logo or color options for retail and private-label sourcing programs.
```

## 4. Specifications 参数表标准字段

| 参数字段 | 是否建议保留 | 示例内容 |
|---|---|---|
| Length / Size / Blade / Type | 必填，按产品类型选择 | `3m/10ft, 5m/16ft, 7.5m/25ft` |
| Material | 必填 | `High-carbon steel tape, ABS shell, stainless steel hook` |
| Customization | 必填 | `Custom logo printing and Pantone color accepted` |
| Packaging | 必填 | `OPP bag, color box, blister card, carton` |
| MOQ | 必填 | `Flexible MOQ, to be confirmed by order details` |
| Lead time | 必填 | `Custom logo samples ready in about 3 days. Bulk lead time depends on order quantity and packaging requirements.` |
| Application | 可选 | `Hardware retail, construction, DIY tool kits, promotional programs` |
| Certificate / Standard | 有真实资料再填 | 不确定时不要乱写 |

注意：参数要真实。没有确认的信息不要写成承诺，尤其是认证、精度等级、材料牌号、交期。

## 5. Key Selling Points 写法

| 规则 | 推荐 |
|---|---|
| 数量 | 3 条为最佳，不建议超过 5 条。 |
| 长度 | 每条 4-10 个英文单词。 |
| 内容 | 功能、材料、定制、包装、目标市场。 |
| 风格 | 清楚、专业、采购导向。 |

推荐表达：

| 类型 | 示例 |
|---|---|
| 功能 | `Easy-read dual-side steel blade` |
| 结构 | `Magnetic hook and shockproof shell` |
| 定制 | `Custom logo and Pantone color accepted` |
| 包装 | `Retail packaging options available` |
| 市场 | `Suitable for hardware and DIY channels` |

避免表达：

| 不建议写法 | 原因 |
|---|---|
| `High quality` | 太泛，不具体 |
| `Cheap price` | 降低品牌专业感 |
| `Very good product` | 没有采购价值 |
| `Hot sale` | 偏平台零售风 |

## 6. Quality Notes 标准模板

每个产品建议保留 4 条：

```text
Raw material inspection before manufacturing
Assembly process and function testing
Appearance, packaging, and quantity check before shipment
Support for buyer-specific quality-control requirements
```

如果某个产品有特殊检查，可以替换其中 1-2 条，例如：

```text
Blade sharpness and locking mechanism check
Tape blade extension and retraction test
Screwdriver bit hardness and magnetic test
```

## 7. 分类填写规范

| 分类 | 适用产品 | URL 入口 |
|---|---|---|
| Tape Measures | 卷尺、钢卷尺、迷你卷尺、宽尺带卷尺、定制 logo 卷尺 | `/tape-measures/` |
| Utility Knives | 美工刀、折叠刀、安全刀、替换刀片、盒刀 | `/utility-knives/` |
| Screwdriver Sets | 螺丝刀套装、多批头套装、棘轮螺丝刀、六角扳手组 | `/screwdriver-sets/` |

新增产品时优先归入这 3 个分类。不要随意新增分类名，否则分类页不会自动显示。

## 8. 工厂图片编辑规范

| 模块 | 图片建议 | 文案重点 |
|---|---|---|
| Factory exterior | 厂房外观、门头、办公室入口 | 证明真实存在 |
| Production line | 注塑、组装、包装线 | 展示生产能力 |
| Quality inspection | 检验台、测试过程、QC 工具 | 增强质量信任 |
| Packing and shipment | 纸箱、托盘、装柜、仓库 | 展示出口交付能力 |

工厂图尽量用真实照片。可以调色、裁切、提亮，但不要过度 AI 化。

## 9. 博客文章规范

| 字段 | 推荐写法 |
|---|---|
| Title | 包含买家会搜索的问题或关键词 |
| URL Slug | 小写英文短语，例如 `custom-tape-measure-packaging-options` |
| Meta Description | 140-160 个英文字符，说明文章解决什么采购问题 |
| Date | 使用发布日期 |
| Body | 用小标题、短段落、清单，面向 B2B 采购商 |

推荐博客主题：

```text
How to Choose a Tape Measure Manufacturer in China
Custom Tape Measure Packaging Options for Importers
Utility Knife Blade Materials: SK5 vs High-Carbon Steel
How to Prepare an OEM Hand Tool RFQ
Quality Control Checklist for Private-Label Hand Tools
```

## 10. 发布前检查表

| 检查项 | 是否通过 |
|---|---|
| 产品主图是 1:1 白底图 |  |
| 产品详情图不超过 2 张 |  |
| URL Slug 使用小写英文和短横线 |  |
| Summary 是完整英文句子 |  |
| Selling Points 具体、专业、不空泛 |  |
| Specs 至少包含尺寸/材料/定制/包装/MOQ/交期 |  |
| Quality Notes 至少 3 条 |  |
| 图片没有明显 AI 失真或水印 |  |
| 保存后 GitHub 有新提交 |  |
| Cloudflare 部署完成后线上页面已更新 |  |

## 11. 后台编辑建议流程

1. 先准备图片：主图 1 张，详情图 2 张。
2. 在后台新建或编辑产品。
3. 先填基础字段，再上传图片。
4. 保存前检查 Slug，发布后不要随便修改 Slug。
5. 保存后等待 Cloudflare 自动部署。
6. 打开线上产品页检查图片、文案、规格表。
7. 最后再做 SEO 文案微调。

重要：已经上线并被客户访问的产品，不建议频繁修改 URL Slug。如果必须改 Slug，需要后续增加跳转规则。
