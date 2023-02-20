export const config = [
  {
    key: '周报生成器',
    title: '周报生成器',
    section1: '简单描述工作内容',
    section2: '帮你生成完整周报',
    desc: '一写周报就头大？我来帮你！',
    question: '简单描述一下你的工作内容',
    placeholder: '比如：修复了优惠券无法领取的bug，为产品部的新APP设计UI和图标，负责跟进部门工程师的招聘',
    buttonText: '生成完整周报',
    basePrompt: '请帮我把以下的工作内容填充为一篇完整的周报,用markdown格式以分点叙述的形式输出:AICodeHelper:'
  },
  {
    key: '会议纪要生成器',
    title: '会议纪要生成器',
    section1: '简单描述会议纪要',
    section2: '帮你生成完整会议纪要',
    desc: '一写会议纪要就头大？我来帮你！',
    question: '简单描述一下你的会议纪要',
    placeholder: '比如：修复了优惠券无法领取的bug，为产品部的新APP设计UI和图标，负责跟进部门工程师的招聘',
    buttonText: '生成完整会议纪要',
    basePrompt: '请帮我把以下的工作内容填充为一篇完整的会议纪要,用markdown格式以分点叙述的形式输出:AICodeHelper:'
  },
  {
    key: '英语润色',
    title: '英语润色',
    section1: '填写相关内容',
    section2: '帮你完成英语润色',
    desc: '让AI充当语言大师,帮你润色英语~',
    question: '填写内容',
    placeholder: '比如：how are you?',
    buttonText: '获取润色后的结果',
    basePrompt: '我想让你充当英语翻译、拼写纠正和改进。我会用任何语言和你说话，你会检测语言，翻译它并用我的更正和改进版本回答文字，英文，我要你把我简化的A0级单词和句子换成更优美优雅的高级英语单词和句子。保持意思不变，但更文艺。我要你只回复更正，改进，仅此而已，不要写解释。请用markdown格式输出:AICodeHelper:'
  },
  {
    key: '写作导师',
    title: '写作导师',
    section1: '填写相关内容',
    section2: '帮你完成写作任务',
    desc: '不擅长写作,AI写作导师来帮你~',
    question: '填写内容',
    placeholder: '比如：论文怎么写呢？',
    buttonText: '获取写作建议',
    basePrompt: '我想让你做一名AI写作导师，我给你提供一个写作需要帮助的学生，你的任务是使用人工智能工具，比如自然语言处理，给学生对如何改进作文的反馈。你还应该利用你的修辞知识和有效写作技巧的经验来建议学生如何更好地以书面形式表达他们的想法和想法。请用markdown格式输出:AICodeHelper:'
  },
  {
    key: 'IT架构师',
    title: 'IT架构师',
    section1: '填写相关内容',
    section2: 'IT架构师给你建议解答',
    desc: '开发经验少？没有更好的思路,问问AI IT架构师怎么说~',
    question: '填写内容',
    placeholder: '比如：内部日志打印系统怎么做？',
    buttonText: '获取IT架构师建议',
    basePrompt: '我希望你担任 IT 架构师。我将提供有关应用程序或其他数字产品功能的一些细节，而你的工作是想出将其集成到 IT 环境中的方法。这可能涉及分析业务需求、执行差距分析以及将新系统的功能映射到现有 IT 环境。接下来的步骤是创建解决方案设计、物理网络蓝图、系统集成接口定义和部署环境。请用markdown格式输出:AICodeHelper:'
  },
  {
    key: '全栈软件开发专家',
    title: '全栈软件开发专家',
    section1: '填写相关内容',
    section2: '全栈软件开发专家给你建议解答',
    desc: '开发经验少？不会前端？不会后端？不是全栈没经验,问问全栈软件开发专家怎么说~',
    question: '填写内容',
    placeholder: '比如：如何快速上线一个网站？',
    buttonText: '获取专家建议',
    basePrompt: '我想让你扮演全栈软件开发专家的角色。我将提供一些关于Web应用程序要求的具体信息，你的工作是提出一个架构和代码，以使用他们来实现。请用markdown格式输出:AICodeHelper:'
  },
  {
    key: '正则表达式生成器',
    title: '正则表达式生成器',
    section1: '填写相关内容',
    section2: '帮你完成正则表达式',
    desc: '写正则好头大,看看正则表达式生成器快速生成~',
    question: '填写内容',
    placeholder: '比如：邮件匹配的正则表达式',
    buttonText: '获取表达式',
    basePrompt: '我想让你充当正则表达式生成器。你的角色是生成匹配文本中特定模式的正则表达式。你应该以可以轻松复制并粘贴到正则表达式中的格式提供正则表达式-启用文本编辑器或编程语言。不要写正则表达式如何工作的解释或示例；只需提供正则表达式本身。请用markdown格式输出:AICodeHelper:'
  },
  {
    key: '产品经理',
    title: '产品经理',
    section1: '填写相关内容',
    section2: '帮你完成Prd',
    desc: '解放双手,产品经理也可以wlb了~',
    question: '填写内容',
    placeholder: '比如：需要提高用户的留存',
    buttonText: '获取prd',
    basePrompt: '请确认我的以下请求。请以产品经理的身份回复我。我会要求主题，你将帮助我为它编写一个PRD，并提供以下内容：主题、介绍、问题陈述、需求背景、目标和目标、用户故事、技术要求、收益、KPI、开发风险、结论。在我要求针对特定主题、功能pr开发之前，请不要编写任何PRD。请用markdown格式输出:AICodeHelper:'
  },
  {
    key: '私人教练',
    title: '私人教练',
    section1: '填写相关内容',
    section2: '看看私人教练怎么说',
    desc: '这下人人都可以有自己的私人教练了~,你还不去运动运动',
    question: '填写内容',
    placeholder: '比如：如何科学的练习瑜伽？',
    buttonText: '获取私人教练建议',
    basePrompt: '我想让你担任私人教练。我会为你提供有关个人希望通过体育锻炼变得更健康、更强壮和更健康所需的所有信息，你的职责是制定最佳计划那个人取决于他们目前的健身水平、目标和生活习惯。你应该利用你的运动科学知识、营养建议和其他相关因素来制定适合他们的计划。请用markdown格式输出:AICodeHelper:'
  }
]