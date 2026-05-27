"""
蓝鹰AI网关 - Python调用示例
BlueEagle AI Gateway - Python Usage Example

官方网站: https://ahg.codes
"""

from openai import OpenAI

# 初始化客户端
# Initialize client
client = OpenAI(
    api_key="your-blueeagle-api-key",  # 替换为您的API密钥
    base_url="https://ahg.codes/v1"
)


def chat_completion_example():
    """对话补全示例 | Chat Completion Example"""
    print("=" * 50)
    print("对话补全示例 | Chat Completion Example")
    print("=" * 50)
    
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "你好，请介绍一下蓝鹰AI网关"}
        ],
        temperature=0.7,
        max_tokens=1000
    )
    
    print(f"模型: {response.model}")
    print(f"消耗Tokens: {response.usage.total_tokens}")
    print(f"回复内容:\n{response.choices[0].message.content}")
    print()


def streaming_example():
    """流式输出示例 | Streaming Example"""
    print("=" * 50)
    print("流式输出示例 | Streaming Example")
    print("=" * 50)
    
    stream = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": "讲一个简短的笑话"}],
        stream=True
    )
    
    print("流式输出: ", end="")
    for chunk in stream:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="")
    print("\n")


def claude_example():
    """Claude模型调用示例 | Claude Model Example"""
    print("=" * 50)
    print("Claude模型调用示例 | Claude Model Example")
    print("=" * 50)
    
    response = client.chat.completions.create(
        model="claude-3-5-sonnet-20241022",
        messages=[
            {"role": "user", "content": "用一句话总结人工智能的发展趋势"}
        ],
        max_tokens=500
    )
    
    print(f"模型: {response.model}")
    print(f"回复内容: {response.choices[0].message.content}")
    print()


def gemini_example():
    """Gemini模型调用示例 | Gemini Model Example"""
    print("=" * 50)
    print("Gemini模型调用示例 | Gemini Model Example")
    print("=" * 50)
    
    response = client.chat.completions.create(
        model="gemini-1.5-pro",
        messages=[
            {"role": "user", "content": "解释什么是机器学习"}
        ],
        max_tokens=800
    )
    
    print(f"模型: {response.model}")
    print(f"回复内容: {response.choices[0].message.content}")
    print()


def list_models_example():
    """获取可用模型列表 | List Available Models"""
    print("=" * 50)
    print("可用模型列表 | Available Models")
    print("=" * 50)
    
    models = client.models.list()
    for model in models.data[:10]:  # 只显示前10个
        print(f"- {model.id}")
    print()


if __name__ == "__main__":
    print("🦅 蓝鹰AI网关 - Python调用示例")
    print("BlueEagle AI Gateway - Python Examples\n")
    
    try:
        # 运行示例
        chat_completion_example()
        streaming_example()
        claude_example()
        gemini_example()
        list_models_example()
        
        print("✅ 所有示例运行完成！")
        print("All examples completed successfully!")
        
    except Exception as e:
        print(f"❌ 错误: {e}")
        print("请确保已正确设置API密钥")
