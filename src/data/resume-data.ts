import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Junsu Im",
  initials: "JI",
  location: "Mountain View, CA, USA",
  locationLink: "https://www.google.com/maps/place/Mountain+View,+CA",
  about: "Software Engineer | Distributed Data and Storage Systems",
  summary:
    "Software Engineer and Storage Systems Ph.D. specializing in high-performance distributed data systems, key-value storage engines, and storage architecture. Built production distributed infrastructure at Meta serving billion-scale global QPS, contributing to multi-tier data lifecycle management, safe storage migration, API extensions, and cross-region consistency observability. Published systems research in EuroSys, OSDI, and USENIX ATC, including an ATC Best Paper Award, with expertise in LSM-tree storage engines, transactional key-value systems, MyRocks-based data processing, SSD/NVMe architecture, and C/C++ performance optimization.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "junsuim93@gmail.com",
    tel: "",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/junsu-im-10002b13b/",
        icon: "linkedin",
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=liyI8F0AAAAJ&hl=en",
        icon: "globe",
      },
    ],
  },
  education: [
    {
      school: "Daegu Gyeongbuk Institute of Science and Technology (DGIST)",
      degree: "PhD in Department of Electrical Engineering and Computer Science (EECS)",
      start: "Mar. 2018",
      end: "Feb. 2025",
      details: [
        "Advisor: Sungjin Lee",
      ],
    },
    {
      school: "Inha University",
      degree: "B.S. in Computer Science and Engineering",
      start: "Mar. 2012",
      end: "Feb. 2018",
      details: [],
    },
  ],
  work: [
    {
      company: "Core Data Facebook Counting Infrastructure, Meta",
      link: "https://about.meta.com",
      badges: [],
      title: "Software Engineer",
      location: "Menlo Park, CA, USA",
      start: "Jul. 2025",
      end: "Current",
      description: "",
      highlights: [
        "Scale & Scope: Managed distributed stateful infrastructure serving billion-scale global QPS across regions.",
        "Data Lifecycle & Tiering: Architected and rolled out automated data lifecycle management and purging across multi-tier storage layers with zero user impact.",
        "Storage Migration & Engineering: Designed safe storage migration primitives to ensure data integrity during cross-region infrastructure transitions.",
        "SLO Metric Design: Architected monitoring framework and SLO metrics for cross-regional consistency and data freshness observability.",
        "API Extensibility: Developed core API extensions to support Redis-compatible NoSQL/cache platform operations.",
        "AI & Automation: Developed an autonomous LLM rollout agent with persistent state and automated recovery alongside an operator-facing CLI suite."
      ],
    },
    {
      company: "CAOSLAB, POSTECH",
      link: "https://www.postech.ac.kr",
      badges: [],
      title: "Postdoctoral Researcher",
      location: "Pohang, S. Korea",
      start: "Mar. 2025",
      end: "Jun. 2025",
      description: "",
      highlights: [
        "Researching on high-performance LSM-tree storage engine focusing on data-intensive workloads and system-level performance optimization.",
      ],
    },
    {
      company: "Network Delivery Engineering, Meta",
      link: "https://about.meta.com",
      badges: [],
      title: "Software Engineering Intern",
      location: "Menlo Park, CA, USA",
      start: "Jun. 2024",
      end: "Sep. 2024",
      description: "",
      highlights: [
        "Developing Thrift API and designing auto-generation code tool",
      ],
    },
    {
      company: "Storage Architecture Team, Memory System Research, SK Hynix",
      link: "https://www.skhynix.com",
      badges: [],
      title: "Research Intern",
      location: "Seongnam, S. Korea",
      start: "Oct. 2022",
      end: "Feb. 2023",
      description: "",
      highlights: [
        "Designed HTAP-friendly LSM-tree based key-value store optimized for mixed OLTP/OLAP workloads.",
        "Evaluated storage-engine design and transactional performance trade-offs.",
        "Analyzed analytical query efficiency for column-oriented layouts in RocksDB/MyRocks environments.",
      ],
    },
    {
      company: "CSAIL, EECS, Massachusetts Institute of Technology",
      link: "https://www.csail.mit.edu",
      badges: [],
      title: "Research Intern",
      location: "Massachusetts, U.S.A",
      start: "Jul. 2019",
      end: "Aug. 2019",
      description: "",
      highlights: [
        "Designing LSM-tree-based key-value store engine for key-value SSD",
        "Integrating HW accelerator into LSM-tree based key-value store for optimizing of its write performance",
      ],
    },
    {
      company: "DataLab, EECS, DGIST",
      link: "https://www.dgist.ac.kr",
      badges: [],
      title: "Ph.D. Student",
      location: "Daegu, S. Korea",
      start: "Feb. 2018",
      end: "Feb. 2025",
      description: "",
      highlights: [
        "LSM-tree based KV storage engine: Designed and implemented LSM-tree based key-value SSD on an embedded board, including network-attached key-value storage devices.",
        "Transaction-enabled KV storage: Designed and implemented transaction-enabled key-value SSD for key-value based file systems.",
        "Memory-efficient storage metadata indexing: Designed and implemented approximate indexing and LSM-tree based FTL algorithms for ultra-large scale SSDs.",
        "SSD/FTL performance optimization: Implemented various FTL algorithms (DFTL, Page-level FTL, S-FTL, TP-FTL) and designed cache partitioning methods for short tail latency.",
      ],
    },
  ],
  skills: [
    {
      category: "Distributed Systems & Infrastructure",
      items: ["Distributed data systems", "distributed caching", "storage migration", "consistency observability", "data lifecycle management", "reliability engineering"],
    },
    {
      category: "Database & Storage Systems",
      items: ["LSM-tree", "key-value stores", "RocksDB", "MyRocks", "HTAP", "transactional storage", "storage metadata indexing", "SSD/NVMe", "FTL"],
    },
    {
      category: "Systems Engineering",
      items: ["C/C++", "Python", "Linux", "multithreaded systems", "performance profiling", "benchmarking", "tail-latency optimization"],
    },
    {
      category: "Research & Evaluation",
      items: ["Storage architecture", "OLTP/OLAP workload analysis", "throughput and latency evaluation", "memory and read/write amplification analysis"],
    },
  ],
  publications: [
    {
      title: "Solid State Drive Targeted Memory-Efficient Indexing for Universal I/O Patterns and Fragmentation Degrees",
      authors: "J. Im, J. Kim, S. Oh, J. Koo, J. Park, S. Lee",
      venue: "proceedings of the European Conference on Computer Systems (EuroSys)",
      year: "2025",
    },
    {
      title: "Modernizing File System through In-Storage Indexing",
      authors: "J. Koo, J. Im, J. Song, J. Park, E. Lee, Bryan S. Kim, S. Lee",
      venue: "proceedings of the 15th USENIX Symposium on Operating Systems Design and Implementation (OSDI)",
      year: "2021",
    },
    {
      title: "Design of LSM-tree-based Key-value SSDs with Bounded Tails",
      authors: "J. Im, J. Bae, C. Chung, Arvind, and S. Lee",
      venue: "ACM Transactions on Storage, vol. 19, no. 2, pp. 1–27",
      year: "2021",
    },
    {
      title: "PinK: High-speed In-storage Key-value Store with Bounded Tails",
      authors: "J. Im, J. Bae, C. Chung, Arvind, and S. Lee",
      venue: "proceedings of the USENIX Annual Technical Conference (ATC)",
      year: "2020",
      note: "Awarded Best Paper",
    },
    {
      title: "LightStore: Software-defined Network-attached Key-value Drives",
      authors: "C. Chung, J. Koo, J. Im, Arvind, and S. Lee",
      venue: "proceedings of the International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)",
      year: "2019",
    },
  ],
  domesticPublications: [],
  patents: [],
  awards: [
    {
      title: "Best Paper Award",
      organization: "USENIX Annual Technical Conference (ATC'20)",
      date: "Jul. 2020",
      location: "U.S.A",
    },
  ],
  grants: [
    {
      title: "Ph.D. Scholarship Student",
      organization: "SK Hynix",
      date: "Jul. 2022",
      location: "S. Korea",
    },
  ],
  projects: [],
} as const;
