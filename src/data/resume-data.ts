import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Junsu Im",
  initials: "JI",
  location: "Mountain View, CA, USA",
  locationLink: "https://www.google.com/maps/place/Mountain+View,+CA",
  about: "Software Engineer | Distributed Stateful Infrastructure | Storage System",
  summary:
    "Software Engineer and Systems Ph.D. specializing in database and storage systems, distributed stateful infrastructure, and performance optimization. At Meta, develops production infrastructure serving billion-scale global QPS across regions, with contributions spanning storage-tier migration, cross-region consistency and freshness observability, data lifecycle mechanisms, and storage API capabilities. Published systems research in EuroSys, OSDI, USENIX ATC, and ACM Transactions on Storage, including first-author work recognized with a USENIX ATC Best Paper Award. Deep expertise in key-value storage, LSM-tree systems, SSD/NVMe architecture, transactional storage, indexing, and C/C++ systems engineering.",
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
      degree: "Ph.D. in Electrical Engineering and Computer Science",
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
      company: "Meta — Core Data, Facebook Counting Infrastructure",
      link: "https://about.meta.com",
      badges: [],
      title: "Software Engineer",
      location: "Menlo Park, CA, USA",
      start: "Jul. 2025",
      end: "Present",
      description: "",
      highlights: [
        "Develop and ship production infrastructure for distributed stateful services serving billion-scale global QPS across regions, spanning storage reliability, automation, observability, and API capabilities.",
        "Designed and rolled out data-purging mechanisms across multi-tier storage layers, strengthening lifecycle management for distributed state.",
        "Built safe storage-tier migration and counter-comparison primitives to preserve data integrity during cross-region infrastructure transitions.",
        "Designed a monitoring framework and core health metrics for cross-region consistency and data freshness, making distributed-state reliability behavior measurable in production.",
        "Extended core APIs with Redis-compatible operations, broadening supported distributed cache and storage use cases.",
        "Developed an autonomous LLM rollout agent with persistent state, automated recovery, and operator-facing CLI workflows."
      ],
    },
    {
      company: "POSTECH — CAOSLAB",
      link: "https://www.postech.ac.kr",
      badges: [],
      title: "Postdoctoral Researcher, Storage Systems",
      location: "Pohang, South Korea",
      start: "Mar. 2025",
      end: "Jun. 2025",
      description: "",
      highlights: [
        "Researched high-performance LSM-tree-based key-value storage systems for data-intensive workloads, with emphasis on system-level performance optimization and storage-engine behavior.",
      ],
    },
    {
      company: "Meta — Network Delivery Engineering",
      link: "https://about.meta.com",
      badges: [],
      title: "Software Engineering Intern",
      location: "Menlo Park, CA, USA",
      start: "Jun. 2024",
      end: "Sep. 2024",
      description: "",
      highlights: [
        "Developed Thrift APIs for production network infrastructure services.",
        "Designed code-generation tooling to improve development workflows for infrastructure service interfaces.",
      ],
    },
    {
      company: "SK hynix — Storage Architecture Team, Memory System Research",
      link: "https://www.skhynix.com",
      badges: [],
      title: "Research Intern",
      location: "Seongnam, South Korea",
      start: "Oct. 2022",
      end: "Feb. 2023",
      description: "",
      highlights: [
        "Evaluated LSM-tree-based storage-organization designs for data-intensive workloads in modern storage systems.",
      ],
    },
    {
      company: "MIT CSAIL",
      link: "https://www.csail.mit.edu",
      badges: [],
      title: "Research Intern",
      location: "Cambridge, MA, USA",
      start: "Jul. 2019",
      end: "Aug. 2019",
      description: "",
      highlights: [
        "Designed an LSM-tree-based key-value storage engine for key-value SSDs.",
        "Integrated a hardware accelerator into the storage-engine data path to improve write-path performance.",
      ],
    },
    {
      company: "DGIST — DataLab",
      link: "https://www.dgist.ac.kr",
      badges: [],
      title: "Ph.D. Researcher, Database & Storage Systems",
      location: "Daegu, South Korea",
      start: "Feb. 2018",
      end: "Feb. 2025",
      description: "",
      highlights: [
        "Designed and implemented LSM-tree-based key-value storage engines for SSD and network-attached storage environments, targeting high throughput and bounded tail latency; work published at USENIX ATC and ACM Transactions on Storage.",
        "Designed a transaction-enabled key-value SSD architecture for key-value-based file systems, contributing to research published at OSDI.",
        "Developed memory-efficient metadata indexing and LSM-tree-based flash translation layer algorithms for ultra-large-scale SSDs, resulting in a first-author EuroSys publication.",
        "Implemented and evaluated flash translation layer and caching designs, analyzing latency, memory overhead, and read/write amplification across storage-system workloads.",
        "Led first-author research on high-speed key-value storage with bounded tail latency, recognized with the USENIX ATC Best Paper Award.",
      ],
    },
  ],
  skills: [
    {
      category: "Database & Storage Systems",
      items: ["Key-value storage engines", "LSM-tree systems", "RocksDB", "indexing", "transactional storage", "SSD/NVMe architecture", "flash translation layers", "storage metadata management"],
    },
    {
      category: "Distributed Systems & Reliability",
      items: ["Distributed stateful services", "distributed caching", "storage migration", "cross-region consistency", "data freshness", "production observability"],
    },
    {
      category: "Performance & Systems Engineering",
      items: ["C/C++", "Python", "Linux", "multithreaded systems", "performance profiling", "benchmarking", "throughput optimization", "tail-latency analysis"],
    },
    {
      category: "Storage Evaluation",
      items: ["Memory-efficiency analysis", "read/write amplification analysis", "storage architecture", "workload evaluation"],
    },
  ],
  publications: [
    {
      title: "Solid State Drive Targeted Memory-Efficient Indexing for Universal I/O Patterns and Fragmentation Degrees",
      authors: "J. Im, J. Kim, S. Oh, J. Koo, J. Park, S. Lee",
      venue: "proceedings of the European Conference on Computer Systems (EuroSys)",
      year: "2025",
      note: "First author",
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
      note: "First author",
    },
    {
      title: "PinK: High-speed In-storage Key-value Store with Bounded Tails",
      authors: "J. Im, J. Bae, C. Chung, Arvind, and S. Lee",
      venue: "proceedings of the USENIX Annual Technical Conference (ATC)",
      year: "2020",
      note: "First author; Best Paper Award",
    },
  ],
  domesticPublications: [],
  patents: [],
  awards: [
    {
      title: "Best Paper Award",
      organization: "USENIX Annual Technical Conference (ATC)",
      date: "2020",
      location: "U.S.A",
    },
    {
      title: "Ph.D. Scholarship Student",
      organization: "SK hynix",
      date: "2022",
      location: "S. Korea",
    },
  ],
  grants: [],
  projects: [],
} as const;
