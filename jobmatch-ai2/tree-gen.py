import os

# Define folders to ignore
ignore_folders = ['node_modules', '.git', '.vscode', 'public', 'dist', 'build', '.next', 'coverage', 'venv', 'env', '.idea', '.pytest_cache']

def generate_tree(directory, indent=0):
    tree = ""
    for item in sorted(os.listdir(directory)):
        if item.startswith('.') or item in ignore_folders:
            continue

        path = os.path.join(directory, item)
        if os.path.isdir(path):
            tree += "  " * indent + "+ " + item + "\n"
            tree += generate_tree(path, indent + 1)
        else:
            tree += "  " * indent + "- " + item + "\n"

    return tree

# Get the current working directory
current_dir = os.getcwd()

# Generate the tree structure
tree_structure = generate_tree(current_dir)

# Write the tree structure to a file
with open('tree.txt', 'w', encoding='utf-8') as f:
    f.write(tree_structure)

print("Directory tree has been written to tree.txt")
