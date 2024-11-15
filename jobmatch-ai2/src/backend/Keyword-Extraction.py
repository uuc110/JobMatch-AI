from rake_nltk import Rake
import json


import nltk
nltk.download('punkt_tab')

# Sample job description text
# job_description = """
# We are looking for a Senior Data Scientist to join our analytics team. The successful candidate 
# will be responsible for developing machine learning models, conducting data analysis, 
# and collaborating with cross-functional teams. The candidate should have experience 
# with Python, R, SQL, and cloud platforms like AWS or GCP. Strong communication skills 
# and the ability to explain complex models to non-technical stakeholders are required.
# """


job_description = """
We are looking for a skilled Data Analyst with a strong focus on data visualization and experience in developing data-based ETL pipelines. The ideal candidate will be responsible for collecting, processing, and analyzing large datasets to support data-driven decision-making across the organization.

Key Responsibilities:

Design, develop, and maintain ETL pipelines to ensure data is efficiently extracted, transformed, and loaded into data warehouses.

Create and manage data visualizations using tools like Power BI, Tableau, Looker or similar platforms to provide clear insights and actionable intelligence.

Collaborate with cross-functional teams to understand data needs and deliver solutions that drive business objectives.

Conduct data analysis to identify trends, patterns, and opportunities for improvement.

Ensure data integrity and consistency across all data platforms and reports.

Generate and deliver reports and presentations to stakeholders, highlighting key insights and recommendations.

"""

# Initialize RAKE by using stopwords from NLTK
r = Rake()

# Extract keywords by passing the job description
r.extract_keywords_from_text(job_description)

# Get ranked phrases with scores (sorted)
ranked_phrases = r.get_ranked_phrases()

print("Keywords extracted using RAKE:")
for phrase in ranked_phrases[:10]:
    print(phrase)


# convert in json 
# ranked_phrases_json = json.dumps({"keywords": ranked_phrases}, indent=4)
