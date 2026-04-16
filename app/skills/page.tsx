"use client";

import { useState } from "react";
import { SectionLayout } from "@/components/layout/section-layout";
import { SkillTree } from "@/components/skills/skill-tree";
import { SkillCard } from "@/components/skills/skill-card";
import { CertificationCard } from "@/components/skills/certification-card";
import { skillCategories, certifications } from "@/lib/skill-tree-data";

/**
 * Skills Page
 * 
 * Features a Digital Skill Tree that grows organically from the central chip,
 * with branches terminating in skill category nodes. Clicking a node reveals
 * the detailed skill cards with glassmorphism styling.
 */
export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const handleSkillSelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Auto-expand the selected category card
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });

    // Scroll to cards section on mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setTimeout(() => {
        document.getElementById("skill-cards")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const toggleCard = (categoryId: string) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  return (
    <SectionLayout title="Skills">
      <div className="space-y-12">
        {/* Skill Tree Visualization */}
        <section aria-labelledby="skill-tree-heading">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-mono text-sm">{"// "}</span>
              <h2 id="skill-tree-heading" className="text-slate-300 font-mono text-sm">
                digital skill tree
              </h2>
            </div>
            <p className="text-slate-600 font-mono text-xs tracking-wide">
              click a node to explore skills
            </p>
          </div>

          <div className="mt-6 -mx-4 sm:mx-0">
            <SkillTree
              onSkillSelect={handleSkillSelect}
              selectedCategory={selectedCategory}
            />
          </div>
        </section>

        {/* Skill Category Cards */}
        <section id="skill-cards" aria-labelledby="tech-stack-heading">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-mono text-sm">{"// "}</span>
              <h2 id="tech-stack-heading" className="text-slate-300 font-mono text-sm">
                tech stack
              </h2>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.id}
                category={category}
                index={index}
                isExpanded={expandedCards.has(category.id)}
                onToggle={() => toggleCard(category.id)}
              />
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section aria-labelledby="certifications-heading">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-mono text-sm">{"// "}</span>
              <h2 id="certifications-heading" className="text-slate-300 font-mono text-sm">
                certifications
              </h2>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.name} cert={cert} index={index} />
            ))}
          </div>
        </section>
      </div>
    </SectionLayout>
  );
}
