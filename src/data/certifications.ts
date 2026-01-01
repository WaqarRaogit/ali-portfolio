import speechEssayCert from "@/assets/certificates/speech-essay-cert.jpg";
import peefScholarship from "@/assets/certificates/peef-scholarship.jpg";
import crsomCert from "@/assets/certificates/crsom-cert.jpg";
import bzuEvent from "@/assets/certificates/bzu-event.jpg";
import achievers2021 from "@/assets/certificates/achievers-2021.jpg";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  shortDescription: string;
  fullDescription: string;
  year: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    id: "essay-writing-2016",
    title: "Essay Writing Competition",
    issuer: "District Khanewal",
    shortDescription: "Certificate of Excellence - 3rd Position at Tehsil Level",
    fullDescription: `This prestigious award was earned during my 5th grade for demonstrating exceptional writing skills in an essay competition held at the Tehsil level in District Khanewal. Competing against students from numerous schools across the tehsil, I secured the 3rd position along with a cash prize.

The competition evaluated participants on their command of language, creativity, logical flow of ideas, and ability to articulate thoughts coherently. This early recognition fueled my passion for academics and instilled confidence in my communication abilities.

This achievement marked the beginning of my journey toward academic excellence and laid the foundation for my continuous pursuit of knowledge and skill development throughout my educational career.`,
    year: "2016-17",
    image: speechEssayCert,
  },
  {
    id: "peef-scholarship-2017",
    title: "PEEF Scholarship",
    issuer: "Punjab Educational Endowment Fund",
    shortDescription: "Certificate of Scholarship for academic achievement in Middle 2017 examination",
    fullDescription: `The Punjab Educational Endowment Fund (PEEF) Scholarship was awarded in recognition of my outstanding academic performance in the Middle Class examination of 2017. This scholarship is one of the most prestigious academic awards in Punjab, given only to students who demonstrate exceptional academic merit.

Securing this scholarship required consistent dedication, hard work, and maintaining top grades throughout my middle school years. The PEEF scholarship not only provided financial support for my further education but also served as a testament to my commitment to academic excellence.

This recognition motivated me to continue striving for excellence and helped shape my academic trajectory, encouraging me to pursue higher education with the same dedication and passion that earned me this honor.`,
    year: "2017",
    image: peefScholarship,
  },
  {
    id: "crsom-7-2023",
    title: "Trophy",
    issuer: "CASPAM - BZU",
    shortDescription: "Second position in Second semester",
    fullDescription: `The CRSOM-7 (CASPAM Regional Student Olympiad of Mathematics) certificate was awarded for participation and performance in this prestigious mathematics competition organized by CASPAM at Bahauddin Zakariya University (BZU), Multan.

This olympiad brings together the brightest mathematical minds from across the region to compete in challenging problem-solving scenarios that test logical reasoning, analytical thinking, and mathematical intuition. The competition covers advanced mathematical concepts and requires creative approaches to complex problems.

Participating in CRSOM-7 enhanced my problem-solving abilities and deepened my understanding of mathematical principles. It provided an excellent platform to interact with fellow mathematics enthusiasts and learn from the competitive academic environment.`,
    year: "2023",
    image: crsomCert,
  },
  {
    id: "crsom-9-2024",
    title: "Trophy",
    issuer: "CASPAM - BZU",
    shortDescription: "2nd position in 4th semester",
    fullDescription: `Building upon my previous experience, I participated in CRSOM-9, the 9th edition of the CASPAM Regional Student Olympiad of Mathematics at Bahauddin Zakariya University. This competition represented an even greater challenge with more advanced mathematical problems and tougher competition.

The olympiad tested advanced concepts in algebra, geometry, number theory, and combinatorics. My continued participation demonstrated my persistent dedication to mathematical excellence and my desire to challenge myself against the best minds in the region.

This experience further refined my analytical capabilities and reinforced my passion for mathematics. The skills developed through these competitions have proven invaluable in my journey as a data analyst and Python developer.`,
    year: "2024",
    image: bzuEvent,
  },
  {
    id: "achievers-2021",
    title: "Abdul Hakeem Achievers 2021",
    issuer: "Punjab Colleges",
    shortDescription: "Recognition for Outstanding Academic Performance",
    fullDescription: `The Abdul Hakeem Achievers 2021 award was presented by Punjab Colleges in recognition of exceptional academic performance throughout the academic year. This award is reserved for students who demonstrate outstanding dedication, consistency, and excellence in their studies.

Earning this recognition required maintaining top grades across all subjects, active participation in academic activities, and showing leadership qualities within the college community. The award ceremony celebrated students who went above and beyond in their academic pursuits.

This achievement during my intermediate education reinforced my commitment to academic excellence and motivated me to pursue higher education in the field of Information Technology, where I continue to apply the same dedication and work ethic that earned me this prestigious recognition.`,
    year: "2021",
    image: achievers2021,
  },
];