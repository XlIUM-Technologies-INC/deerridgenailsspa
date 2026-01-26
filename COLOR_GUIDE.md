# 🎨 颜色使用指南

## 全局颜色配置

所有颜色都在 `app/globals.css` 中统一管理,修改一次即可应用到全站。

### CSS 变量定义 (第140-146行)

```css
:root {
  --brand-green: #1a2e1a; /* 深绿色 - 主要品牌色 */
  --brand-yellow: #f4f1ea; /* 浅黄色 - 辅助色 */
  --brand-gray-dark: #2a2a2a; /* 深灰色 */
  --brand-gray-medium: #5a5a5a; /* 中灰色 */
  --brand-gray-light: #a0a0a0; /* 浅灰色 */
  --brand-gray-lighter: #e0e0e0; /* 极浅灰色 */
}
```

## 可用的 CSS 类

### 基础颜色类

#### 文字颜色

- `text-brand-green` - 深绿色文字
- `text-brand-yellow` - 浅黄色文字
- `text-brand-gray-dark` - 深灰色文字
- `text-brand-gray-medium` - 中灰色文字
- `text-brand-gray-light` - 浅灰色文字
- `text-brand-gray-lighter` - 极浅灰色文字

#### 背景颜色

- `bg-brand-green` - 深绿色背景
- `bg-brand-yellow` - 浅黄色背景
- `bg-brand-gray-dark` - 深灰色背景
- `bg-brand-gray-medium` - 中灰色背景
- `bg-brand-gray-light` - 浅灰色背景
- `bg-brand-gray-lighter` - 极浅灰色背景

#### 边框颜色

- `border-brand-green` - 深绿色边框
- `border-brand-yellow` - 浅黄色边框
- `border-brand-gray-*` - 各种灰色边框

### 带透明度的类

#### 背景透明度

- `bg-brand-green/5` - 深绿色背景 5% 透明度
- `bg-brand-green/10` - 深绿色背景 10% 透明度
- `bg-brand-green/15` - 深绿色背景 15% 透明度
- `bg-brand-green/20` - 深绿色背景 20% 透明度
- `bg-brand-green/40` - 深绿色背景 40% 透明度
- `bg-brand-green/60` - 深绿色背景 60% 透明度
- `bg-brand-green/90` - 深绿色背景 90% 透明度

- `bg-brand-yellow/10` - 浅黄色背景 10% 透明度
- `bg-brand-yellow/15` - 浅黄色背景 15% 透明度
- `bg-brand-yellow/30` - 浅黄色背景 30% 透明度
- `bg-brand-yellow/50` - 浅黄色背景 50% 透明度

#### 文字透明度

- `text-brand-green/20` - 深绿色文字 20% 透明度
- `text-brand-green/30` - 深绿色文字 30% 透明度
- `text-brand-yellow/30` - 浅黄色文字 30% 透明度
- `text-brand-yellow/40` - 浅黄色文字 40% 透明度

### 渐变颜色

- `from-brand-green` - 渐变起始色为深绿色
- `to-brand-green` - 渐变结束色为深绿色
- `from-brand-yellow` - 渐变起始色为浅黄色
- `to-brand-yellow` - 渐变结束色为浅黄色

### 交互状态

- `hover:bg-brand-green` - 悬停时深绿色背景
- `hover:text-brand-green` - 悬停时深绿色文字
- `hover:border-brand-green` - 悬停时深绿色边框
- `focus:border-brand-green` - 聚焦时深绿色边框
- `focus:ring-brand-green` - 聚焦时深绿色光环

## 使用示例

### 替换前 (硬编码)

```tsx
<Button className="bg-[#1a2e1a] text-white hover:bg-[#1a2e1a]">
  Book Now
</Button>

<div className="text-[#f4f1ea]/40">
  <Sparkles />
</div>

<div className="bg-gradient-to-r from-[#1a2e1a] to-[#1a2e1a]">
  Title
</div>
```

### 替换后 (使用 CSS 类)

```tsx
<Button className="bg-brand-green text-white hover:bg-brand-green">
  Book Now
</Button>

<div className="text-brand-yellow/40">
  <Sparkles />
</div>

<div className="bg-gradient-to-r from-brand-green to-brand-green">
  Title
</div>
```

### 直接使用 CSS 变量

如果需要自定义透明度或其他特殊情况:

```tsx
<div style={{ backgroundColor: 'var(--brand-green)' }}>
  Custom
</div>

<div style={{ color: 'var(--brand-yellow)', opacity: 0.75 }}>
  Custom opacity
</div>
```

## 修改全站颜色

要修改整个网站的颜色方案,只需要:

1. 打开 `app/globals.css`
2. 找到 `:root` 中的 CSS 变量 (第140-146行)
3. 修改颜色值

例如,将深绿色改为深蓝色:

```css
:root {
  --brand-green: #1a2e4a; /* 改成深蓝色 */
  /* ... */
}
```

所有使用 `bg-brand-green`、`text-brand-green` 等类的地方都会自动更新!

## 颜色值对照表

| 类名前缀             | 当前颜色值 | 用途               |
| -------------------- | ---------- | ------------------ |
| `brand-green`        | `#1a2e1a`  | 主要品牌色(深绿色) |
| `brand-yellow`       | `#f4f1ea`  | 辅助色(浅黄色)     |
| `brand-gray-dark`    | `#2a2a2a`  | 深灰色文字/背景    |
| `brand-gray-medium`  | `#5a5a5a`  | 中灰色文字         |
| `brand-gray-light`   | `#a0a0a0`  | 浅灰色文字/图标    |
| `brand-gray-lighter` | `#e0e0e0`  | 极浅灰色背景/边框  |

## 注意事项

⚠️ **重要**: 由于已经有很多文件使用了硬编码颜色值 `[#1a2e1a]`、`[#f4f1ea]` 等,建议逐步迁移到使用 CSS 类。

优先级:

1. 新代码 → 始终使用 CSS 类
2. 修改现有代码时 → 顺便替换成 CSS 类
3. 统一重构 → 批量替换所有硬编码颜色

这样可以保证代码的可维护性和一致性!
