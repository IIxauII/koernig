# Generating llms.txt Files

This guide documents the process of creating an accurate `llms.txt` file by navigating a website's documentation, extracting its structure, and generating a properly formatted file according to the [llms.txt specification](https://llmstxt.org/).

## What is llms.txt?

`llms.txt` is a markdown file placed at the root of a website (e.g., `https://example.com/llms.txt`) that helps Large Language Models (LLMs) understand and navigate the site's content. It serves as a curated map directing AI systems to the most important and authoritative resources.

According to the [official specification](https://llmstxt.org/), `llms.txt` provides:
- Brief background information
- Guidance for LLMs
- Links to detailed markdown files
- A structured format that's both human and LLM readable

## The llms.txt Format Specification

The `llms.txt` file follows a specific format as defined in the [llms.txt proposal](https://llmstxt.org/):

1. **H1 heading** with the project/site name (required)
2. **Blockquote** with a short summary containing key information
3. **Zero or more markdown sections** (paragraphs, lists, etc.) with detailed information
4. **Zero or more H2 sections** containing "file lists" of URLs
   - Each file list is a markdown list with `[name](url)` links
   - Optional descriptions after a colon: `[name](url): description`
5. **Optional section** (special meaning) - URLs here can be skipped if shorter context is needed

### Example Format

```markdown
# Project Name

> Brief description of what the project does and its key purpose.

Additional context and important notes about the project.

## Main Section

- [Link Title](https://example.com/page.html.md): Description of what this page contains
- [Another Link](https://example.com/other.html.md): Another description

## Optional

- [Secondary Resource](https://example.com/secondary.html.md): Less critical information
```

See the [official llms.txt example](https://llmstxt.org/llms.txt) for a real-world reference.

## Process Overview

The goal is to create an accurate `llms.txt` file by:
1. Understanding the target website's structure
2. Extracting actual documentation links and content
3. Verifying all links are correct and accessible
4. Organizing content according to the llms.txt specification
5. Testing the generated file

## Step-by-Step Process

### 1. Navigate to the Target Website

Start by navigating to the main documentation page or homepage. This provides the entry point to understand the website's structure and locate the main navigation elements.

### 2. Explore the Website Structure

Navigate through key sections to understand the documentation hierarchy. Visit main documentation areas, getting started pages, API references, and other important sections to get a comprehensive view of the site's organization.

### 3. Extract Navigation Structure

Use browser capabilities to extract the actual navigation structure from the page. There are several methods to find navigation links:

**Method 1: Extract from Sidebar Navigation**
Look for sidebar navigation elements, which are common in documentation sites. These are typically found in elements with navigation-related attributes or classes. Extract all links from these elements, ensuring you capture both the link text and the full URL.

**Method 2: Extract from Main Menu**
The main navigation menu at the top of the page often contains the primary sections. Look for navigation elements in the header area and extract links, filtering out internal anchor links that don't lead to separate pages.

**Method 3: Extract from Table of Contents**
Some pages have dedicated table of contents sections. These can be identified by specific roles, classes, or attributes. Extract links from these sections to understand the page structure.

### 4. Verify Links and Extract Content

For each extracted link, verify it exists and extract relevant information. Navigate to each link to confirm it loads correctly and contains the expected content. Take snapshots of pages to verify they have meaningful content.

**Check for markdown versions**: According to the specification, pages should have `.md` versions:
- HTML pages: `page.html` → `page.html.md`
- Directory indexes: `/docs/` → `/docs/index.html.md`

Always prefer markdown versions when available, as they are more LLM-friendly.

### 5. Extract Page Titles and Descriptions

For each verified page, extract:
- Page title from the document title element or main heading
- Page description from meta description tags or the first paragraph of content
- Content category or section to help organize the links

This information will be used to create meaningful link descriptions in the llms.txt file.

### 6. Organize Content Hierarchically

Structure the content according to the llms.txt specification:

1. **H1 with project name** - Extract from homepage or main page
2. **Blockquote summary** - Write a concise 1-2 sentence description
3. **Detailed sections** - Add any important notes or context
4. **H2 sections** - Group links by topic/category
5. **Optional section** - Mark secondary/less critical resources

### 7. Generate the llms.txt File

Create the file following the exact format:

```markdown
# Project Name

> Brief, informative description of the project and its purpose.

Important notes or context that helps LLMs understand the project better.

## Primary Section Name

- [Page Title](https://example.com/page.html.md): Brief description of content
- [Another Page](https://example.com/other.html.md): What this page covers

## Secondary Section

- [Resource Title](https://example.com/resource.html.md): Description

## Optional

- [Less Critical Resource](https://example.com/optional.html.md): Can be skipped if context is limited
```

### 8. Verify and Test

**Verification Checklist:**
- [ ] All links use actual URLs extracted from the website
- [ ] All URLs are verified to exist and load correctly
- [ ] Markdown versions of pages are used (`.html.md` or `.md` extensions)
- [ ] Format follows the llms.txt specification exactly
- [ ] H1 heading is present with project name
- [ ] Blockquote summary is concise and informative
- [ ] Links are organized in logical H2 sections
- [ ] Optional section is used for secondary resources
- [ ] No guessed or fabricated URLs

**Testing:**
- Use tools like [llms_txt2ctx](https://llmstxt.org/) to parse and expand the file
- Test with multiple LLMs to ensure they can answer questions about the content
- Verify the file is accessible at `/llms.txt` on the target domain

## Best Practices

### ✅ Do

- **Extract real links** from actual page navigation elements
- **Use markdown versions** of pages when available (`.html.md` extension)
- **Verify every URL** by navigating to it
- **Group logically** by topic, importance, or user journey
- **Write clear descriptions** for each link
- **Follow the specification** exactly as defined
- **Include the Optional section** for less critical resources
- **Keep descriptions concise** but informative

### ❌ Don't

- **Don't guess URLs** - always extract from actual page elements
- **Don't make up link patterns** - verify each URL exists
- **Don't skip verification** - broken links defeat the purpose
- **Don't use HTML pages** when markdown versions are available
- **Don't include internal anchors** unless they're meaningful entry points
- **Don't duplicate content** unnecessarily
- **Don't ignore the Optional section** - use it for secondary resources

## Tools and Techniques

### Browser Navigation Capabilities

When working with browser tools, you can:
- Navigate to pages to explore the site structure
- Capture page snapshots to see the structure and content
- Extract data from page elements to get navigation links and content
- Wait for content to load before extracting information
- Interact with page elements if needed to reveal navigation

### Extraction Strategies

1. **Sidebar Navigation**: Most documentation sites have a sidebar with all pages
   - Look for navigation elements with accessibility labels, aside elements, or sidebar classes
   
2. **Main Menu**: Top navigation often has main sections
   - Check header areas for navigation elements and main navigation classes
   
3. **Table of Contents**: Some pages have TOC sections
   - Look for table of contents classes, navigation roles, or dedicated TOC elements
   
4. **Footer Links**: May contain additional important pages
   - Check footer areas for navigation links that might not be in the main menu
   
5. **Sitemap**: If available, can provide complete page list
   - Check for sitemap files at common locations like `/sitemap.xml` or `/sitemap.txt`

### Processing Markdown Versions

According to the specification, websites should provide markdown versions:
- HTML pages: `page.html` → `page.html.md`
- Directory indexes: `/docs/` → `/docs/index.html.md`

Always prefer markdown versions in your `llms.txt` file when available.

## Real-World Examples

### Example 1: llmstxt.org

The [llmstxt.org website](https://llmstxt.org/) provides an excellent example:

- [View the llms.txt file](https://llmstxt.org/llms.txt)
- [Read the specification](https://llmstxt.org/)

This demonstrates:
- Proper H1 heading
- Blockquote summary
- Organized H2 sections
- Clear link descriptions
- Use of markdown file extensions

### Example 2: FastHTML

The FastHTML project follows the specification:
- [FastHTML llms.txt](https://fastht.ml/llms.txt) (referenced in the spec)

## Integration Tools

Various tools can help with llms.txt generation and processing:

- **[llms_txt2ctx](https://llmstxt.org/)** - CLI and Python module for parsing llms.txt files
- **[JavaScript Implementation](https://llmstxt.org/)** - Sample JavaScript implementation
- **[VitePress Plugin](https://llmstxt.org/)** - Automatically generates llms.txt for VitePress sites
- **[Docusaurus Plugin](https://llmstxt.org/)** - Generates llms.txt for Docusaurus sites

## Output and Hosting

The final `llms.txt` file should be:
- **Plain text or Markdown format**
- **Hosted at the root**: `https://example.com/llms.txt`
- **Accessible without authentication**
- **Updated when documentation structure changes**
- **Served with appropriate content-type** (text/plain or text/markdown)

## References

- [llms.txt Official Specification](https://llmstxt.org/)
- [llms.txt Example File](https://llmstxt.org/llms.txt)
- [llms.txt Directories](https://llmstxt.org/) - Lists of sites with llms.txt files
- [llms_txt2ctx Tool](https://llmstxt.org/) - For parsing and expanding llms.txt files
