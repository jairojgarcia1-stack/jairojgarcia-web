import type { BlogPost } from "@/lib/content/types";
import { post as blog01 } from "./blog-01";
import { post as blog02 } from "./blog-02";
import { post as blog03 } from "./blog-03";
import { post as blog04 } from "./blog-04";
import { post as blog05 } from "./blog-05";
import { post as blog06 } from "./blog-06";
import { post as blog07 } from "./blog-07";
import { post as blog08 } from "./blog-08";
import { post as blog09 } from "./blog-09";
import { post as blog10 } from "./blog-10";
import { post as blog11 } from "./blog-11";
import { post as blog12 } from "./blog-12";
import { post as blog13 } from "./blog-13";
import { post as blog14 } from "./blog-14";
import { post as blog15 } from "./blog-15";
import { post as blog16 } from "./blog-16";

export const blogPosts: BlogPost[] = [
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog06,
  blog07,
  blog08,
  blog09,
  blog10,
  blog11,
  blog12,
  blog13,
  blog14,
  blog15,
  blog16,
].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
