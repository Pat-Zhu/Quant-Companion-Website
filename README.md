# Quant Companion Website

This repository contains a static quantitative-finance course companion built with plain HTML, CSS, and JavaScript. It has no build step and is ready for GitHub Pages.

## Preview locally

Open **index.html** in a browser, or run the following command from the repository:

    py -3 -m http.server 8000

Then visit http://localhost:8000.

## GitHub Pages deployment

This repository is a project Pages site. In **Settings > Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.

Expected URL:

https://pat-zhu.github.io/Quant-Companion-Website/

## Update the content

- Edit module and course copy in **index.html**.
- Add approved public files under **materials/**.
- Add or remove resource-row blocks in **index.html**.
- Keep each resource's data-category and data-search attributes updated so filtering continues to work.
- Replace placeholders marked "Coming soon" before launch.

## Textbook files

The latest interview-preparation chapter is under **textbook/interview-preparation/** in both Overleaf-ready TeX and compiled PDF formats.

## Security boundary

GitHub Pages is for the public course website only. Do not put passwords, API keys, private question-bank files, student records, or access-control logic in this repository; anything sent to browser JavaScript can be inspected.

Suggested separation:

- **GitHub Pages:** syllabus, readings, lecture links, public interview guide, and instructor-approved announcements.
- **AWS backend:** account login, contribution-based access, searchable restricted questions, audit logs, and email notifications.
- **Browser integration:** call the AWS API over HTTPS after authentication. Store secrets only on the backend.

A practical AWS version can use Cognito for authentication, API Gateway plus Lambda for the API, DynamoDB or RDS for question data, CloudWatch for logs, and SES for email. The exact services should be chosen after the data model, access rules, and budget are defined.

## Repository structure

- **index.html**, **styles.css**, **app.js**: static course website.
- **materials/**: public downloadable course materials.
- **textbook/interview-preparation/**: latest TeX and PDF textbook chapter.
