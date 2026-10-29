# Muhammad Saad — Premium Developer Portfolio

A responsive React + TypeScript portfolio with Framer Motion animations, project detail modals, live project-cost calculator, WhatsApp quote links, and a contact form.

## Run locally
1. Install Node.js 20+.
2. Open this folder in VS Code / terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Personalize
Edit `src/config.ts`:
- Replace `profilePhoto` with your own image path (put image in `public/images/`).
- Add your real email, WhatsApp number (country code, digits only), GitHub, LinkedIn, CV path and real demo/repository links.
- Update estimates and currency exchange rate.
- Keep demo URLs empty until you have real deployments.

## Contact email
The form validates details and opens an email draft using the visitor's mail app by default. For actual server-side delivery, configure SMTP variables in `.env` and implement the optional server using `npm install express nodemailer dotenv` then `npm run server`. Never commit real `.env` credentials.

## Deploy
- Frontend: Vercel (build command `npm run build`, output directory `dist`).
- Backend email endpoint: Render or another Node host, after configuring SMTP environment variables.
- Configure `VITE_API_BASE` only if you connect a backend endpoint.

## Notes
Project counts and client reviews are placeholders; update them with verified details. Cost calculator amounts are estimates, not a binding quote. No payment is collected.
# saad-portfolio
# saad-premium-portfolio
