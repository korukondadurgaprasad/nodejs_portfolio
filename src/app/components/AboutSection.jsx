"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>AI(Artificial Intelligence)</li>
        <li>ML(Machine Learning)</li>
        <li>Data Science</li>
        <li>Python</li>
        <li>DSA(Data structures andAlgorithums)</li>
        <li>MY SQL</li>
        <li>JAVA</li>
        <li>C Lang</li>
        <li>Kotlin</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>
          <strong>Graduation 2022-2026</strong>
          <ul className="list-disc pl-4">
            <li>KIET Group of Institutions              </li>
            <li>Branch of Artificial Intelligence and Data science </li>
            <li>CGPA: 9.0</li>
          </ul>
        </li>
        <li>
          <strong>Intermediate               2020-2022 </strong>
          <ul className="list-disc pl-4">
            <li>Sri Chaitanya</li>
            <li>CGPA : 9.5 (950/1000)</li>
          </ul>
        </li>
        <li>
          <strong>Schooling                  2009 -2020</strong>
          <ul className="list-disc pl-4">
            <li>Saint Joseph</li>
            <li>CGPA : 10.0               </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Foundations of Modern Machine Learning by IIIT-H</li>
        <li>ML Internship Certificate from Edunet offered by IBM</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am Durga Prasad, a second-year B-Tech student specializing in Artificial Intelligence and Data Science at
           the KIET Group of Institutions, Kakinada Korangi. My profound passion for technology, coupled with a keen 
           interest in effective communication, has driven me to pursue this exciting and rapidly evolving field of 
           Artificial Intelligence. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
