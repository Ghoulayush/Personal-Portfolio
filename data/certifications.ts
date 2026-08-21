export type Certification = {
  name: string;
  issuer: string;
  credentialId: string;
  verifyUrl: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    credentialId: "2b46dee7-24f0-4f6b-9fcb-00c501380079",
    verifyUrl:
      "https://www.credly.com/badges/2b46dee7-24f0-4f6b-9fcb-00c501380079/public_url",
  },
];
