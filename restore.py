import os, json, shutil
history_dir = r"C:\Users\shreyas\AppData\Roaming\Code\User\History"
count = 0
for root, dirs, files in os.walk(history_dir):
    if "entries.json" in files:
        entries_path = os.path.join(root, "entries.json")
        try:
            with open(entries_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            res = data.get("resource", "")
            if "paperforce" in res.lower() and "src" in res.lower() and res.endswith(".tsx"):
                local_path = res.replace("file:///", "").replace("/", "\\").replace("%3A", ":")
                if os.path.exists(local_path) and os.path.getsize(local_path) == 0:
                    entries = data.get("entries", [])
                    if entries:
                        src_file = os.path.join(root, entries[-1].get("id", ""))
                        if os.path.exists(src_file):
                            shutil.copy(src_file, local_path)
                            print("Restored:", local_path)
                            count += 1
        except Exception as e:
            pass
print(f"Total restored: {count}")
