# Install necessary libraries
# pip install nltk scikit-learn rake-nltk spacy

import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from rake_nltk import Rake

# Download NLTK stopwords
# nltk.download('stopwords')


# Sample job descriptions
job_descriptions = [
    """
    We are looking for a Data Scientist skilled in Python, machine learning, and SQL. 
    Experience with cloud platforms like AWS and excellent analytical skills are required.
    """,
    """
    Seeking a Software Engineer with expertise in Java, Spring Boot, and microservices architecture. 
    Familiarity with CI/CD pipelines and version control tools like Git is a plus.
    """,
    """
    Hiring a Product Manager with experience in Agile methodologies, market analysis, 
    and team leadership. Strong communication and organizational skills are essential.
    """
]

# Sample resume
resume = """
Experienced Data Scientist proficient in Python, machine learning, and data analysis. 
Skilled in SQL and cloud platforms, including AWS. Adept at building predictive models 
and presenting insights to stakeholders.
"""



def extract_keywords_rake(text):
    rake_nltk_var = Rake()
    rake_nltk_var.extract_keywords_from_text(text)
    return rake_nltk_var.get_ranked_phrases()

# Extract keywords from all job descriptions and the resume
job_keywords = [extract_keywords_rake(desc) for desc in job_descriptions]
resume_keywords = extract_keywords_rake(resume)

print("Keywords from Resume:", resume_keywords)
print("\n")
print("Keywords from Jobs:", job_keywords)




def calculate_similarity(job_keywords, resume_keywords):
    # Combine all keywords into a single list for vectorization
    corpus = [' '.join(keywords) for keywords in job_keywords] + [' '.join(resume_keywords)]

    # Use TF-IDF to create vectors
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform(corpus)

    # Calculate similarity between resume (last vector) and all jobs
    cosine_similarities = cosine_similarity(tfidf_matrix[-1:], tfidf_matrix[:-1])
    return cosine_similarities.flatten()

# Calculate similarity scores
similarity_scores = calculate_similarity(job_keywords, resume_keywords)
print("Similarity Scores:", similarity_scores)



# Rank jobs based on similarity scores
ranked_jobs = sorted(enumerate(similarity_scores), key=lambda x: x[1], reverse=True)

# Display ranked jobs
print("\nMatched Jobs (Ranked):")
for idx, score in ranked_jobs:
    print(f"Job {idx + 1}: Similarity Score = {score:.2f}")
    print(job_descriptions[idx])
    print()



