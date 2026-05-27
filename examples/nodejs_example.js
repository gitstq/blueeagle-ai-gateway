/**
 * 蓝鹰AI网关 - Node.js调用示例
 * BlueEagle AI Gateway - Node.js Usage Example
 *
 * 官方网站: https://ahg.codes
 */

import OpenAI from 'openai';

// 初始化客户端
// Initialize client
const client = new OpenAI({
  apiKey: 'your-blueeagle-api-key',  // 替换为您的API密钥
  baseURL: 'https://ahg.codes/v1'
});

/**
 * 对话补全示例
 * Chat Completion Example
 */
async function chatCompletionExample() {
  console.log('='.repeat(50));
  console.log('对话补全示例 | Chat Completion Example');
  console.log('='.repeat(50));

  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: '你好，请介绍一下蓝鹰AI网关' }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    console.log(`模型: ${response.model}`);
    console.log(`消耗Tokens: ${response.usage.total_tokens}`);
    console.log(`回复内容:\n${response.choices[0].message.content}`);
    console.log();
  } catch (error) {
    console.error('错误:', error.message);
  }
}

/**
 * 流式输出示例
 * Streaming Example
 */
async function streamingExample() {
  console.log('='.repeat(50));
  console.log('流式输出示例 | Streaming Example');
  console.log('='.repeat(50));

  try {
    const stream = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: '讲一个简短的笑话' }],
      stream: true
    });

    process.stdout.write('流式输出: ');
    for await (const chunk of stream) {
      if (chunk.choices[0]?.delta?.content) {
        process.stdout.write(chunk.choices[0].delta.content);
      }
    }
    console.log('\n');
  } catch (error) {
    console.error('错误:', error.message);
  }
}

/**
 * Claude模型调用示例
 * Claude Model Example
 */
async function claudeExample() {
  console.log('='.repeat(50));
  console.log('Claude模型调用示例 | Claude Model Example');
  console.log('='.repeat(50));

  try {
    const response = await client.chat.completions.create({
      model: 'claude-3-5-sonnet-20241022',
      messages: [
        { role: 'user', content: '用一句话总结人工智能的发展趋势' }
      ],
      max_tokens: 500
    });

    console.log(`模型: ${response.model}`);
    console.log(`回复内容: ${response.choices[0].message.content}`);
    console.log();
  } catch (error) {
    console.error('错误:', error.message);
  }
}

/**
 * Gemini模型调用示例
 * Gemini Model Example
 */
async function geminiExample() {
  console.log('='.repeat(50));
  console.log('Gemini模型调用示例 | Gemini Model Example');
  console.log('='.repeat(50));

  try {
    const response = await client.chat.completions.create({
      model: 'gemini-1.5-pro',
      messages: [
        { role: 'user', content: '解释什么是机器学习' }
      ],
      max_tokens: 800
    });

    console.log(`模型: ${response.model}`);
    console.log(`回复内容: ${response.choices[0].message.content}`);
    console.log();
  } catch (error) {
    console.error('错误:', error.message);
  }
}

/**
 * 获取可用模型列表
 * List Available Models
 */
async function listModelsExample() {
  console.log('='.repeat(50));
  console.log('可用模型列表 | Available Models');
  console.log('='.repeat(50));

  try {
    const models = await client.models.list();
    models.data.slice(0, 10).forEach(model => {
      console.log(`- ${model.id}`);
    });
    console.log();
  } catch (error) {
    console.error('错误:', error.message);
  }
}

/**
 * 图片生成示例
 * Image Generation Example
 */
async function imageGenerationExample() {
  console.log('='.repeat(50));
  console.log('图片生成示例 | Image Generation Example');
  console.log('='.repeat(50));

  try {
    const response = await client.images.generate({
      model: 'dall-e-3',
      prompt: 'A beautiful sunset over mountains',
      n: 1,
      size: '1024x1024'
    });

    console.log(`图片URL: ${response.data[0].url}`);
    console.log();
  } catch (error) {
    console.error('错误:', error.message);
  }
}

/**
 * Embedding向量化示例
 * Text Embedding Example
 */
async function embeddingExample() {
  console.log('='.repeat(50));
  console.log('Embedding向量化示例 | Text Embedding Example');
  console.log('='.repeat(50));

  try {
    const response = await client.embeddings.create({
      model: 'text-embedding-3-small',
      input: 'The quick brown fox jumps over the lazy dog'
    });

    console.log(`向量维度: ${response.data[0].embedding.length}`);
    console.log(`前5个值: ${response.data[0].embedding.slice(0, 5).join(', ')}`);
    console.log();
  } catch (error) {
    console.error('错误:', error.message);
  }
}

// 主函数
async function main() {
  console.log('🦅 蓝鹰AI网关 - Node.js调用示例');
  console.log('BlueEagle AI Gateway - Node.js Examples\n');

  await chatCompletionExample();
  await streamingExample();
  await claudeExample();
  await geminiExample();
  await listModelsExample();
  await imageGenerationExample();
  await embeddingExample();

  console.log('='.repeat(50));
  console.log('✅ 所有示例运行完成！');
  console.log('All examples completed successfully!');
}

// 运行主函数
main().catch(console.error);
