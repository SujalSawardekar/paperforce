import json
import re
import os

log_file = r"C:\Users\shreyas\.gemini\antigravity-ide\brain\afafe6b6-22ad-4330-ae4f-495014e2e6a7\.system_generated\logs\transcript_full.jsonl"

file_contents = {}

with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        try:
            entry = json.loads(line)
            # Looking for responses from view_file
            if entry.get("source") == "SYSTEM" and entry.get("type") == "TOOL_RESPONSE":
                content = entry.get("content", "")
                if "File Path: `file:///" in content and "The following code has been modified" in content:
                    # Extract file path
                    path_match = re.search(r"File Path: `file:///([^`]+)`", content)
                    if path_match:
                        file_path = path_match.group(1).replace("%3A", ":").replace("/", "\\")
                        # Only restore files inside src that are 0 bytes
                        if "paperforce\\src" in file_path.lower():
                            if os.path.exists(file_path) and os.path.getsize(file_path) == 0:
                                # Extract content
                                # Content starts after "Please note that any changes targeting the original code should remove the line number, colon, and leading space.\n"
                                start_marker = "Please note that any changes targeting the original code should remove the line number, colon, and leading space.\n"
                                end_marker = "\nThe above content shows the entire, complete file contents of the requested file."
                                
                                start_idx = content.find(start_marker)
                                end_idx = content.find(end_marker)
                                
                                if start_idx != -1 and end_idx != -1:
                                    raw_code = content[start_idx + len(start_marker):end_idx]
                                    # Strip line numbers
                                    clean_code = []
                                    for line_code in raw_code.split("\n"):
                                        if ": " in line_code:
                                            clean_code.append(line_code.split(": ", 1)[1])
                                        else:
                                            clean_code.append(line_code)
                                    file_contents[file_path] = "\n".join(clean_code)
        except Exception as e:
            print("Error parsing line", e)

for file_path, content in file_contents.items():
    print(f"Restoring {file_path}")
    try:
        with open(file_path, "w", encoding="utf-8") as out_f:
            out_f.write(content)
    except Exception as e:
        print(f"Failed to restore {file_path}", e)

print(f"Restored {len(file_contents)} files from transcript.")
