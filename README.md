<div align="center">

# IBAS Feedback

**反馈管理模块**

IBAS 系统的反馈管理模块，提供用户意见反馈（Suggestion）的提交与管理功能。

Feedback management module for the IBAS system — user suggestion submission and management.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Java](https://img.shields.io/badge/Java-1.8+-orange.svg)](https://www.oracle.com/java/)
[![Maven](https://img.shields.io/badge/Maven-3.x-red.svg)](https://maven.apache.org/)
[![Version](https://img.shields.io/badge/version-0.2.0-green.svg)](pom.xml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-贡献--contributing)

</div>

---

## 📖 目录 | Table of Contents

- [✨ 特性 | Features](#-特性--features)
- [📦 模块结构 | Modules](#-模块结构--modules)
- [🚀 快速开始 | Quick Start](#-快速开始--quick-start)
- [📋 业务对象 | Business Objects](#-业务对象--business-objects)
- [📚 相关项目 | Related Projects](#-相关项目--related-projects)
- [🤝 贡献 | Contributing](#-贡献--contributing)
- [📄 许可证 | License](#-许可证--license)

---

## ✨ 特性 | Features

- **💬 意见反馈** — 用户意见反馈（Suggestion）提交与管理
- **👤 用户关联** — 反馈与用户信息关联
- **📊 状态跟踪** — 反馈状态跟踪与处理

---

## 📦 模块结构 | Modules

| 模块 | 类型 | 说明 |
|------|------|------|
| `ibas.feedback` | JAR | **核心模块** — 反馈业务对象定义、仓储层 |
| `ibas.feedback.service` | WAR | **REST 服务** — Jersey 端点（DataService、FileService） |

---

## 🚀 快速开始 | Quick Start

### 环境要求 | Prerequisites

- **JDK** 1.8+
- **Maven** 3.x
- [ibas-framework](https://github.com/color-coding/ibas-framework)（BOBAS 框架）

### 构建 | Build

```bash
# 克隆仓库
git clone https://github.com/color-coding/ibas.feedback.git
cd ibas.feedback

# 编译全部模块
./compile_packages.sh            # Linux / macOS
compile_packages.bat             # Windows

# 编译单个模块
mvn clean package install -Dmaven.test.skip=true -f ibas.feedback/pom.xml

# 运行测试
mvn test -f ibas.feedback/pom.xml

# 部署
./deploy_packages.sh
```

### Maven 依赖

```xml
<dependency>
    <groupId>org.colorcoding.apps</groupId>
    <artifactId>ibas.feedback</artifactId>
    <version>0.2.0</version>
</dependency>
```

---

## 📋 业务对象 | Business Objects

| 业务对象 | 说明 |
|----------|------|
| `Suggestion` | 用户意见反馈 |

---

## 📚 相关项目 | Related Projects

| 项目 | 说明 |
|------|------|
| [ibas-framework](https://github.com/color-coding/ibas-framework) | BOBAS 业务对象框架 |

---

## 🤝 贡献 | Contributing

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 发起 Pull Request

---

## 📄 许可证 | License

本项目基于 [Apache License 2.0](LICENSE) 开源。
---

## 🙏 鸣谢 | Thanks

<div align="center">

**[Color-Coding Studio](http://colorcoding.org/)** · 咔啦工作室

</div>
