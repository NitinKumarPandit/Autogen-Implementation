# import httpx
# from bs4 import BeautifulSoup
# from typing import Dict, Any

# async def scrape_website(url: str) -> Dict[str, Any]:
#     async with httpx.AsyncClient() as client:
#         try:
#             response = await client.get(url)
#             soup = BeautifulSoup(response.text, 'html.parser')
            
#             # Extract main content
#             main_content = ' '.join([
#                 p.get_text(strip=True) 
#                 for p in soup.find_all(['p', 'main', 'article', 'section', 'div'])
#                 if p.get_text(strip=True)
#             ])

#             # Extract meta information
#             meta_description = soup.find('meta', {'name': 'description'})
#             meta_keywords = soup.find('meta', {'name': 'keywords'})
#             print("Main Content: ",main_content)
            
#             return {
#                 'main_content': main_content[:5000],  # Limit content length
#                 'meta_description': meta_description.get('content', '') if meta_description else '',
#                 'meta_keywords': meta_keywords.get('content', '') if meta_keywords else '',
#                 'title': soup.title.string if soup.title else ''
#             }
#         except Exception as e:
#             return {
#                 'error': f"Error scraping website: {str(e)}",
#                 'main_content': '',
#                 'meta_description': '',
#                 'meta_keywords': '',
#                 'title': ''
#             }
import asyncio
async def search_web_tool(query: str) -> str:
        await asyncio.sleep(15)
        return ("""OneShot.ai is a company that offers AI-powered solutions to enhance and automate go-to-market (GTM) strategies for businesses. Here's an overview of the services and the challenges addressed:

                    Core Offering:
                    OneShot.ai provides a suite of AI agents designed to revolutionize outreach and marketing efforts. These agents work together to automate and improve various aspects of the GTM process.

                    Key AI Agents and Their Functions:

                    1. Insight Agent: Automates prospect research, providing deep insights instantly.
                    2. Personalization Agent: Crafts personalized messages across multiple channels (email, LinkedIn, calls).
                    3. Integration Agent: Integrates with popular tools like Hubspot, Apollo, Outreach, and Salesloft.
                    4. Persona Agent: Automates tasks and crafts outreach that reflects the brand's unique voice.
                    5. Scaling Agent: Balances outreach volume with quality.

                    Challenges Addressed:

                    1. High Cost, Low Return of Outbound Marketing: OneShot.ai aims to make outreach more efficient and effective.
                    2. Generic Outreach: Their AI agents create personalized messages to increase engagement.
                    3. Limited Personalization: The platform enables deep personalization at scale.
                    4. Time-Consuming Research: Automation of prospect research saves time for sales teams.
                    5. Integration with Existing Tools: Seamless integration with popular sales and marketing platforms.

                    Quantitative Results (from testimonials):

                    1. One client reported that OneShot paid for itself in 3 months.
                    2. Another client doubled their results without increasing hiring.
                    3. The solution helped one company scale quickly without additional hiring.

                    Unique Selling Points:

                    1. AI-driven insights and personalization
                    2. Multi-channel outreach capabilities
                    3. Integration with existing sales and marketing tools
                    4. Ability to maintain a human-like tone in automated communications
                    5. Scalability without compromising quality

                    Target Market:
                    The product appears to be aimed at businesses of various sizes, from growing startups to enterprise-level companies, particularly those with significant outbound marketing and sales efforts.

                    In summary, OneShot.ai addresses the challenges of inefficient, impersonal, and time-consuming outbound marketing and sales processes by leveraging AI to automate research, personalize communications, and integrate seamlessly with existing tools, ultimately aiming to improve ROI and scalability for their clients' GTM efforts."""
                )
