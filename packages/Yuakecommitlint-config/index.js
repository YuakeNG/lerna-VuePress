module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']],
  },
  prompt: {
    messages: {
      skip: ':跳过',
      max: '最多 %d 个字符',
      min: '至少 %d 个字符',
      emptyWarning: '不能为空',
      upperLimitWarning: '超过限制',
      lowerLimitWarning: '低于限制'
    },
    questions: {
      type: {
        description: '选择您要提交的更改类型：',
        enum: {
          feat: {
            description: '新增功能',
            title: '功能',
            emoji: '✨',
          },
          fix: {
            description: '修复 bug',
            title: 'Bug 修复',
            emoji: '🐛',
          },
          docs: {
            description: '仅文档更改',
            title: '文档',
            emoji: '📚',
          },
          style: {
            description: '不影响代码含义的更改（空格、格式、缺少分号等）',
            title: '样式',
            emoji: '💎',
          },
          refactor: {
            description: '既不修复 bug 也不添加功能的代码更改',
            title: '代码重构',
            emoji: '📦',
          },
          perf: {
            description: '提升性能的代码更改',
            title: '性能优化',
            emoji: '🚀',
          },
          test: {
            description: '添加缺失的测试或修正现有测试',
            title: '测试',
            emoji: '🚨',
          },
          build: {
            description: '影响构建系统或外部依赖的更改（例如范围：gulp、broccoli、npm）',
            title: '构建',
            emoji: '🛠',
          },
          ci: {
            description: '更改 CI 配置文件和脚本（例如范围：Travis、Circle、BrowserStack、SauceLabs）',
            title: '持续集成',
            emoji: '⚙️',
          },
          chore: {
            description: '对源代码或测试文件没有修改的其他更改',
            title: '杂项',
            emoji: '♻️',
          },
          revert: {
            description: '撤销以前的提交',
            title: '撤销',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: '此更改的范围是什么（例如组件或文件名）',
      },
      subject: {
        description: '以简短的命令式形式描述更改',
      },
      body: {
        description: '提供更详细的更改说明',
      },
      isBreaking: {
        description: '是否有任何破坏性更改？',
      },
      breakingBody: {
        description: 'BREAKING CHANGE 提交需要提供一段说明。请输入有关提交本身的更详细描述',
      },
      breaking: {
        description: '描述破坏性更改',
      },
      isIssueAffected: {
        description: '此更改是否影响任何未解决的问题？',
      },
      issuesBody: {
        description: '如果关闭了问题，则提交需要提供一段说明。请输入有关提交本身的更详细',
      },
      issues: {
        description: '添加问题引用（例如："修复 #123"，"关联 #123"）',
      },
    },
  }
};