
source = []
counties = {}

with open("netesforras.csv","r",encoding="utf-8") as f:
    source = f.read().split("\n")

with open("counties.csv", "r", encoding="utf-8") as f:
    countiesFile = f.read().split("\n")

for l in countiesFile:
    s = l.split(";")
    counties[s[0]] = s[1]
    print(f"{s[0]}:{counties[s[0]]}")

with open("netesforras2.csv", "a", encoding="utf-8") as f:

    for l in source:
        if ";" in l:
            s = l.split(";")
            if len(s) == 2:
                varos, megye = s

                done = False
                for key, value in counties.items():
                    if megye == value:
                        megye = key
                        done = True

                if not done:
                    print(f"Nem találtam a megyét: {l}")

            else:
                print(f"Hibás sor: {l}")


            f.write(f"{varos};{megye}\n")