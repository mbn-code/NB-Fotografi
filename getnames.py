import os

folder_path = 'assets' # replace with the path to your folder

file_names = os.listdir(folder_path)

for file_name in file_names:
    print(file_name)