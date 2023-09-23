import pandas as pd
import os
import re

# Define the input CSV file and output directory
input_csv_file = 'input.csv'
output_directory = 'output_md_files/'

# Create the output directory if it doesn't exist
os.makedirs(output_directory, exist_ok=True)

# Read the CSV file into a DataFrame
df = pd.read_csv(input_csv_file)

# Iterate through each row in the DataFrame
for index, row in df.iterrows():
    # Extract the 'id' field from the row
    id_value = str(row['id'])
    
    # Extract the 'layout' field from the row
    layout_value = str(row['layout'])

    # Create a subfolder based on the 'layout' value
    layout_subfolder = os.path.join(output_directory, layout_value)
    
    # Create the Markdown filename based on the 'id' field within the subfolder
    md_filename = os.path.join(layout_subfolder, f'{id_value}.md')

    # Create a dictionary to hold the key-value pairs for the Markdown content
    markdown_content = {}

    # Add the 'layout' key-value pair to the dictionary
    markdown_content['layout'] = f'layout: {layout_value}\n'

    # Iterate through all fields in the CSV (except 'id' and 'layout') and add them to the dictionary
    for column in df.columns:
        if column not in ['id', 'layout']:
            # Check if the field is a list enclosed in square brackets
            if isinstance(row[column], str) and re.match(r'\[.*\]', row[column]):
                # Remove square brackets and split the string into a list
                value_list = [item.strip() for item in row[column][1:-1].split(',')]
                # Format the list as a Markdown list
                markdown_content[column] = f'{column}:\n'
                for item in value_list:
                    escaped_item = item.replace('"', '\\"')
                    markdown_content[column] += f' - \"{escaped_item}\"\n'
            else:
                # Check if the value is not NaN before adding it to the dictionary
                if pd.notna(row[column]):
                    # Escape string values and add them to the dictionary
                    escaped_item = row[column].replace('"', '\\"')
                    markdown_content[column] = f'{column}: \"{escaped_item}\"\n'

    # Add the dynamically created 'permalink' key-value pair
    markdown_content['permalink'] = f'permalink: /{id_value}/'

    # Create the subfolder if it doesn't exist
    os.makedirs(layout_subfolder, exist_ok=True)

    # Write the Markdown content to the file within the subfolder
    with open(md_filename, 'w') as md_file:
        md_file.write('---\n')
        for key, value in markdown_content.items():
            md_file.write(value)
        md_file.write('\n---')

print('Markdown files created successfully.')
