import pandas as pd
df = pd.read_csv (r"drug_final3.csv")
df.to_json (r'DrugData_local.json')