"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";

export default function InvitationEnvelope() {
  const [open, setOpen] = useState(false);

  return (
    <section className="envelope-section">
      {!open ? (
        <motion.div
          className="envelope"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="envelope-flap">✉️</div>

          <div className="envelope-content">
            <span>A SPECIAL INVITATION</span>

            <strong>FOR YOU</strong>

            <button onClick={() => setOpen(true)}>
              OPEN INVITATION
            </button>
          </div>
        </motion.div>
      ) : (
        <InvitationCard />
      )}
    </section>
  );
}