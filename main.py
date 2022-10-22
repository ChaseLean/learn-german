import pandas as pd
import os

os.chdir("C:/Users/Chase Lean/Desktop/Javascript/43 Learn german")
data = pd.read_excel("german_words.xlsx")
data = data.dropna(subset=["Meaning"])

def stringify(list):
    temp = "["
    for item in list:
        temp = temp + "'" + str(item) + "', "
    temp = temp[:-2]
    temp += "]"
    return temp

with open("words.txt", "w", encoding='utf-8') as file:
    string = "["
    for index, rows in data.iterrows():
        string += stringify([rows["Meaning"], rows["Present"], rows["Past Tense"], rows["Past Participle"]])
        string += ", "
    string = string[:-2] + "]"
    file.write(string)

