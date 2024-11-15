import os

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created directory: {path}")

def create_file(path):
    if not os.path.exists(path):
        open(path, 'a').close()
        print(f"Created file: {path}")

def create_project_structure():
    # Define the project structure
    structure = {
        "src": {
            "app": {
                "api": {},
                "fonts": ["GeistMonoVF.woff", "GeistVF.woff"],
                "pages": {
                    "dashboard": {},
                    "jobs": {},
                    "resume": {},
                    "settings": {},
                },
                "layout.tsx": None,
                "page.tsx": None,
                "globals.css": None,
            },
            "components": {
                "ui": {},
                "example": {},
                "dashboard": {},
                "jobs": {},
                "resume": {},
                "common": {},
            },
            "lib": {
                "utils.ts": None,
            },
            "styles": {},
            "types": {},
            "hooks": {},
            "context": {},
        },
        "public": {
            "favicon.ico": None,
            "images": {},
        },
        "config": {},
        "scripts": {},
        "tests": {},
    }

    # Create the structure
    for dir_name, contents in structure.items():
        create_directory(dir_name)
        if isinstance(contents, dict):
            for sub_dir, sub_contents in contents.items():
                sub_path = os.path.join(dir_name, sub_dir)
                create_directory(sub_path)
                if isinstance(sub_contents, dict):
                    for file_name in sub_contents:
                        create_file(os.path.join(sub_path, file_name))
                elif isinstance(sub_contents, list):
                    for file_name in sub_contents:
                        create_file(os.path.join(sub_path, file_name))
                elif sub_contents is None:
                    create_file(sub_path)

    # Create root files
    root_files = [
        "README.md",
        "components.json",
        "next-env.d.ts",
        "next.config.mjs",
        "package.json",
        "postcss.config.js",
        "tailwind.config.ts",
        "tsconfig.json",
    ]
    for file in root_files:
        create_file(file)

if __name__ == "__main__":
    create_project_structure()