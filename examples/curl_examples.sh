#!/bin/bash
# 蓝鹰AI网关 - cURL调用示例
# BlueEagle AI Gateway - cURL Usage Examples
#
# 官方网站: https://ahg.codes

# 设置API密钥（请替换为您的实际API密钥）
export BLUEEAGLE_API_KEY="your-blueeagle-api-key"
export BASE_URL="https://ahg.codes/v1"

echo "🦅 蓝鹰AI网关 - cURL调用示例"
echo "BlueEagle AI Gateway - cURL Examples"
echo "=========================================="
echo ""

# ==========================================
# 1. 对话补全 - Chat Completion
# ==========================================
echo "1. 对话补全示例 | Chat Completion Example"
echo "------------------------------------------"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $BLUEEAGLE_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello, BlueEagle!"}
    ],
    "temperature": 0.7,
    "max_tokens": 500
  }' | jq -r '.choices[0].message.content'

echo ""
echo ""

# ==========================================
# 2. 流式输出 - Streaming
# ==========================================
echo "2. 流式输出示例 | Streaming Example"
echo "------------------------------------------"
echo "注意: 流式输出将逐字显示"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $BLUEEAGLE_API_KEY" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{"role": "user", "content": "Count from 1 to 5"}],
    "stream": true
  }'

echo ""
echo ""

# ==========================================
# 3. Claude模型调用
# ==========================================
echo "3. Claude模型调用 | Claude Model Example"
echo "------------------------------------------"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $BLUEEAGLE_API_KEY" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "messages": [{"role": "user", "content": "What is the capital of France?"}],
    "max_tokens": 100
  }' | jq -r '.choices[0].message.content'

echo ""
echo ""

# ==========================================
# 4. Gemini模型调用
# ==========================================
echo "4. Gemini模型调用 | Gemini Model Example"
echo "------------------------------------------"
curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $BLUEEAGLE_API_KEY" \
  -d '{
    "model": "gemini-1.5-pro",
    "messages": [{"role": "user", "content": "Explain quantum computing in simple terms"}],
    "max_tokens": 200
  }' | jq -r '.choices[0].message.content'

echo ""
echo ""

# ==========================================
# 5. 获取模型列表
# ==========================================
echo "5. 获取可用模型列表 | List Available Models"
echo "------------------------------------------"
curl -s "$BASE_URL/models" \
  -H "Authorization: Bearer $BLUEEAGLE_API_KEY" | jq -r '.data[].id' | head -10

echo ""
echo ""

# ==========================================
# 6. 图片生成 (DALL-E)
# ==========================================
echo "6. 图片生成示例 | Image Generation Example"
echo "------------------------------------------"
curl -s "$BASE_URL/images/generations" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $BLUEEAGLE_API_KEY" \
  -d '{
    "model": "dall-e-3",
    "prompt": "A beautiful sunset over mountains",
    "n": 1,
    "size": "1024x1024"
  }' | jq -r '.data[0].url'

echo ""
echo ""

# ==========================================
# 7. Embedding向量化
# ==========================================
echo "7. Embedding向量化 | Text Embedding Example"
echo "------------------------------------------"
curl -s "$BASE_URL/embeddings" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $BLUEEAGLE_API_KEY" \
  -d '{
    "model": "text-embedding-3-small",
    "input": "The quick brown fox jumps over the lazy dog"
  }' | jq -r '.data[0].embedding[:5]'  # 只显示前5个数值

echo ""
echo "=========================================="
echo "✅ 所有示例执行完成！"
echo "All examples completed!"
