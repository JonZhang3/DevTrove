import { TechStackType } from "../types";

export default {
  stack: [
    { title: "Data Collection", key: "collection" }, // 数据收集
    { title: "Data Processing", key: "processing" }, // 数据处理
    { title: "Data Storage", key: "storage" }, // 数据存储
    { title: "Data Analysis", key: "analysis" }, // 数据分析
  ],
  processing: [
    {
      name: "Apache Beam",
      logo: "https://beam.apache.org/images/beam_logo_circle.svg",
      homepage: "https://beam.apache.org",
      description:
        "Apache Beam is a unified programming model for Batch and Streaming data processing.",
      tags: [],
      github: {
        url: "https://github.com/apache/beam",
        stars: 7391,
      },
      features: {
        Batch: true,
        Streaming: true,
        CrossLanguage: true,
      },
      skill: {
        percent: 0,
        desc: "",
      },
    },
  ],
} as TechStackType;
