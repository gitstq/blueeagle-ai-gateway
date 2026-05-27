# 🦅 蓝鹰AI网关 - 调用示例

本目录包含多种编程语言的调用示例，帮助您快速接入蓝鹰AI网关。

## 📁 文件说明

| 文件 | 说明 | 运行方式 |
|------|------|---------|
| `python_example.py` | Python调用示例 | `python python_example.py` |
| `curl_examples.sh` | cURL命令示例 | `bash curl_examples.sh` |
| `nodejs_example.js` | Node.js调用示例 | `node nodejs_example.js` |

## 🔧 快速开始

### Python

```bash
# 安装依赖
pip install openai

# 修改API密钥后运行
python python_example.py
```

### cURL

```bash
# 设置环境变量
export BLUEEAGLE_API_KEY="your-api-key"

# 运行示例
bash curl_examples.sh
```

### Node.js

```bash
# 安装依赖
npm install openai

# 修改API密钥后运行
node nodejs_example.js
```

## ⚙️ 配置说明

所有示例都需要将 `your-blueeagle-api-key` 替换为您在 [ahg.codes](https://ahg.codes) 获取的真实API密钥。

Base URL统一为：`https://ahg.codes/v1`

## 📚 支持的模型

- OpenAI: GPT-4o, GPT-4o-mini, GPT-4-Turbo, GPT-3.5-Turbo
- Anthropic: Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Sonnet
- Google: Gemini 1.5 Pro, Gemini 1.5 Flash
- Antigravity: 全系列模型

## 💡 提示

- 所有示例都兼容OpenAI官方SDK
- 支持流式输出（Streaming）
- 支持函数调用（Function Calling）
- 支持多模态输入（Vision）
