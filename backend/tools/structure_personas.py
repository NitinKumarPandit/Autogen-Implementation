from typing import Dict, List
def structure_personas(personas_data: List[Dict[str, str]]) -> List[Dict[str, str]]:
    """
    Formats persona information into a structured format.

    Args:
        personas_data (List[Dict[str, str]]): A list of dictionaries where each dictionary contains:
            - "jobTitle" (str): The job title of the persona.
            - "problem" (str): The problem faced by the persona.
            - "solution" (str): The solution provided to the persona.

    Returns:
        List[Dict[str, str]]: A list of dictionaries formatted as:
            - { "jobTitle": str, "problem": str, "solution": str }
    """
    structured_personas = []

    for persona in personas_data:
        structured_personas.append({
            "jobTitle": persona.get("jobTitle", ""),
            "problem": persona.get("problem", ""),
            "solution": persona.get("solution", "")
        })

    return structured_personas