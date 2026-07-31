export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

export async function submitMessage(message: ContactMessage): Promise<void> {
  // Simulates a network request. Swap this body for a call to an API route
  // (e.g. POST /api/contact) or an email provider once a backend exists.
  await new Promise((resolve) => setTimeout(resolve, 900));
  void message;
}
