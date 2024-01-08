import React from "react";
import GithubSocial from "../Socials/Github";
import LinkedInSocial from "../Socials/LinkedInSocial";
import YoutubeSocial from "../Socials/YoutubeSocial";
import { ContactHero } from "./ContactHero";

export default function Contact() {
  return (
    <div className="skillset-banner py-20">
      <div className="banner-inner">
        <ContactHero />

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-4 lg:py-6">
            <div className="max-w-screen-xl">
              <div className="grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-x-20 lg:grid-cols-7 lg:gap-x-20 lg:gap-y-20">
                <div>
                  <GithubSocial />
                </div>
                <div>
                  <LinkedInSocial />
                </div>
                <div>
                  <YoutubeSocial />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
