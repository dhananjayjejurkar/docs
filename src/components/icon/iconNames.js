const iconNames = {
  ALERT: "Alert",
  ANNOUNCE: "Announce",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKUP: "Backup",
  BARMAN: "Barman",
  BDR: "Bdr",
  BIG_DATA: "BigData",
  BRAIN_CIRCUIT: "BrainCircuit",
  BRIEFCASE: "Briefcase",
  BUSINESSMAN: "Businessman",
  BUSINESSWOMAN: "Businesswoman",
  CASE_STUDY: "CaseStudy",
  CERTIFICATE: "Certificate",
  CHANGE: "Change",
  CHAT: "Chat",
  CHECKLIST: "Checklist",
  CHECKMARK: "Checkmark",
  CHEVRON_DOWN: "ChevronDown",
  CHEVRON_LEFT: "ChevronLeft",
  CHEVRON_RIGHT: "ChevronRight",
  CHEVRON_UP: "ChevronUp",
  CLOSE: "Close",
  CLOUD: "Cloud",
  CLOUD_CHECKED: "CloudChecked",
  CLOUD_DB: "CloudDb",
  CLOUD_DBA: "CloudDba",
  CLOUD_PRIVATE: "CloudPrivate",
  CLOUD_PUBLIC: "CloudPublic",
  CLUSTER: "Cluster",
  CODE_WRITING: "CodeWriting",
  COFFEE: "Coffee",
  CONFIG_MANAGEMENT: "ConfigManagement",
  CONFLICT: "Conflict",
  CONNECT: "Connect",
  CONSOLE: "Console",
  CONTACT: "Contact",
  CONTAINER: "Container",
  CONTROL: "Control",
  CONVERT: "Convert",
  CROWN: "Crown",
  CUBES: "Cubes",
  CYCLE: "Cycle",
  DATA_TRANSFER: "DataTransfer",
  DATABASE: "Database",
  DATABASE_ADMIN: "DatabaseAdmin",
  DATABASE_BACKUP: "DatabaseBackup",
  DELIVER_LOVE: "DeliverLove",
  DESIGN: "Design",
  DEVELOPER: "Developer",
  DIPLOMA: "Diploma",
  DOCKER_CONTAINER: "DockerContainer",
  DOCS: "Docs",
  DOTTED_BOX: "DottedBox",
  DOWNLOAD: "Download",
  DRIVES: "Drives",
  DUPLICATE: "Duplicate",
  EARTH: "Earth",
  EASY: "Easy",
  EDB_ARK: "EdbArk",
  EDB_BART: "EdbBart",
  EDB_DASHBOARD: "EdbDashboard",
  EDB_EFM: "EdbEfm",
  EDB_EPAS: "EdbEpas",
  EDB_KUBERNETES: "EdbKubernetes",
  EDB_MIGRATION_PORTAL: "EdbMigrationPortal",
  EDB_MIGRATION_TOOLKIT: "EdbMigrationToolkit",
  EDB_PEM: "EdbPem",
  EDB_REPLICATE: "EdbReplicate",
  EDB_REPLICATION: "EdbReplication",
  EDB_SYMBOL: "EdbSymbol",
  ELLIPSIS: "Ellipsis",
  ENERGY: "Energy",
  ENTERPRISE: "Enterprise",
  EVENT: "Event",
  EXPORT: "Export",
  EXTENSION: "Extension",
  EXTERNAL_LINK: "ExternalLink",
  FILE: "File",
  GLOBE: "Globe",
  GOVERNMENT: "Government",
  GUI: "Gui",
  HAMBURGER: "Hamburger",
  HANDSHAKE: "Handshake",
  HARD_TO_FIND: "HardToFind",
  HIGH_AVAILABILITY: "HighAvailability",
  HORIZONTAL: "Horizontal",
  HORIZONTAL_NAME_TAG: "HorizontalNameTag",
  IDEA_SHARING: "IdeaSharing",
  IMPROVE: "Improve",
  INFO: "Info",
  INSTALL: "Install",
  INSTANCES: "Instances",
  INTEGRATION: "Integration",
  KNIGHT: "Knight",
  KUBERNETES: "Kubernetes",
  LAPTOP_CONFIG: "LaptopConfig",
  LEADER: "Leader",
  LEARNING: "Learning",
  MANAGED_OPERATIONS: "ManagedOperations",
  MIGRATE: "Migrate",
  MIGRATION: "Migration",
  MISSION: "Mission",
  MODULE: "Module",
  MONITORING: "Monitoring",
  MORE_TEAM: "MoreTeam",
  NAME_TAG: "NameTag",
  NETWORK: "Network",
  NETWORK2: "Network2",
  NEW_WINDOW: "NewWindow",
  NEWS: "News",
  OPEN_SOURCE: "OpenSource",
  OPTIONS: "Options",
  PARTNER: "Partner",
  PARTNERS: "Partners",
  PDF: "Pdf",
  PEOPLE: "People",
  PIGGY_BANK: "PiggyBank",
  PLACEHOLDER: "Placeholder",
  PLANNER: "Planner",
  PLAY_CIRCLE: "PlayCircle",
  POSTGRESQL: "Postgresql",
  PREFERENCES: "Preferences",
  PRESENTATION: "Presentation",
  PROCESS: "Process",
  PROCESS_IMPROVEMENT: "ProcessImprovement",
  PRODUCT_STAR: "ProductStar",
  PULSE: "Pulse",
  QUOTE_LEFT: "QuoteLeft",
  QUOTE_RIGHT: "QuoteRight",
  REMOTE_DBA: "RemoteDba",
  REPLICATION: "Replication",
  ROCKET: "Rocket",
  RSS: "Rss",
  SEARCH: "Search",
  SECURITY: "Security",
  SECURITY_CONFIG: "SecurityConfig",
  SERVICES_SUPPORT: "ServicesSupport",
  SPEED: "Speed",
  SPINNER: "Spinner",
  SQL: "Sql",
  STACK: "Stack",
  STAR: "Star",
  STOPWATCH: "Stopwatch",
  STORE: "Store",
  SUBSET: "Subset",
  SUPPORT: "Support",
  SUPPORT_PORTAL: "SupportPortal",
  SYNCHRONIZE: "Synchronize",
  TEN_YEARS: "TenYears",
  TICKET: "Ticket",
  TICKET_STAR: "TicketStar",
  TOOLBOX: "Toolbox",
  TOOLS: "Tools",
  TRAINING: "Training",
  TREEHOUSE: "Treehouse",
  TUTORIAL: "Tutorial",
  UNLOCK: "Unlock",
  VENN: "Venn",
  WEB_SECURITY: "WebSecurity",
  WEBINAR: "Webinar",
  ANGULARJS: "logos/Angularjs",
  C: "logos/C",
  C_PLUS_PLUS: "logos/CPlusPlus",
  C_SHARP: "logos/CSharp",
  C_SHARP_MONO: "logos/CSharpMono",
  CENTOS: "logos/Centos",
  DEBIAN: "logos/Debian",
  DJANGO: "logos/Django",
  DOCKER: "logos/Docker",
  DOT_NET: "logos/DotNet",
  EDB_BADGE: "logos/EdbBadge",
  EDB_DOCS_LOGO_DISC_DARK: "logos/EdbDocsLogoDiscDark",
  EDB_LOGO_DISC_DARK: "logos/EdbLogoDiscDark",
  EDB_LOGO_SYMBOL_BADGE: "logos/EdbLogoSymbolBadge",
  GOLANG: "logos/Golang",
  HADOOP: "logos/Hadoop",
  HADOOP_MONO: "logos/HadoopMono",
  HASKELL: "logos/Haskell",
  HTML: "logos/Html",
  IOS: "logos/Ios",
  JAVA: "logos/Java",
  JAVA_MONO: "logos/JavaMono",
  JAVASCRIPT: "logos/Javascript",
  JQUERY: "logos/Jquery",
  KOTLIN: "logos/Kotlin",
  KUBERNETES: "logos/Kubernetes",
  KUBERNETES_MONO: "logos/KubernetesMono",
  LARAVEL: "logos/Laravel",
  LARAVEL_MONO: "logos/LaravelMono",
  LINKEDIN: "logos/Linkedin",
  LINKEDIN_MONO: "logos/LinkedinMono",
  LINUX: "logos/Linux",
  MACOS: "logos/Macos",
  NODEJS: "logos/Nodejs",
  NODEJS_MONO: "logos/NodejsMono",
  PANDAS: "logos/Pandas",
  PERL: "logos/Perl",
  PHP: "logos/Php",
  PHP_MONO: "logos/PhpMono",
  POSTGRESQL: "logos/Postgresql",
  POSTGRESQL_MONO: "logos/PostgresqlMono",
  PYTHON: "logos/Python",
  PYTHON_MONO: "logos/PythonMono",
  REACT_NATIVE: "logos/ReactNative",
  REDHAT: "logos/Redhat",
  REDHAT_MONO: "logos/RedhatMono",
  RUBY: "logos/Ruby",
  RUBY_MONO: "logos/RubyMono",
  SUSE: "logos/Suse",
  SWIFT: "logos/Swift",
  TYPESCRIPT: "logos/Typescript",
  UBUNTU: "logos/Ubuntu",
  VUE_JS: "logos/VueJs",
  WINDOWS: "logos/Windows",
  MOON: "color/Moon",
  NOT_FOUND: "color/NotFound",
  SERVER_ERROR: "color/ServerError",
  SUN: "color/Sun",
};
export default iconNames;
