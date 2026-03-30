# Decap CMS Setup Guide - Tequila Mockingbirds

I have integrated Decap CMS into your project. To enable the admin interface in production (e.g., on Netlify), follow these steps to set up authentication.

## 1. Enable Netlify Identity
If you are deploying to Netlify:
1. Go to your site dashboard on **Netlify**.
2. Navigate to **Site settings** > **Identity**.
3. Click **Enable Identity service**.
4. In the **Registration preferences**, select **Open** or **Invite only** (Invite only is recommended for security).
5. Scroll down to **Services** > **Git Gateway** and click **Enable Git Gateway**. This allows the CMS to commit changes directly to your repository.

## 2. Add the Identity Widget to the Home Page
To ensure the login modal works correctly when navigating back from the admin page, the Identity widget script should be in the `<head>` of your main `layout.tsx` or `index.html`.
*(Note: I have already added the necessary initialization script to `public/admin/index.html`.)*

## 3. Accessing the Admin Interface
- **Local Dev**: Run `npm run dev` and visit `http://localhost:3000/admin/`.
- **Production**: Visit `https://your-site-url.com/admin/`.

## 4. How to Log In
- Once Identity is enabled, visit the `/admin/` path.
- Click **"Login with Netlify Identity"**.
- If it's your first time, you may need to "Sign Up" (if registration is open) or accept an invitation sent from the Netlify dashboard.

## 5. Local Development (Optional)
I have enabled `local_backend: true` in `config.yml`. This allows you to test the CMS locally without pushing to Git:
1. Run `npx decap-server` in a separate terminal.
2. The CMS will now save changes directly to your local JSON files in `src/content/`.

---
> [!TIP]
> **Production Safety**: Ensure your `main` branch is protected. The CMS will push commits directly to the branch specified in `config.yml` (currently set to `main`).
