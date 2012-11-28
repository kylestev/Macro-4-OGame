import io
import re

def get_file_contents(path):
    f = open(path, 'r')
    c = ''.join(f.readlines())
    f.close()

    return c

def main():
    files = [
        'proto',
        'extensions',
        'levelable',
        'constants',
        'functions',
        'buildable',
        'planets',
        'managers/basic_manager',
        'managers/impl/research_manager',
        'managers/impl/resource_manager',
        'managers/buildings/building_manager',
        'managers/buildings/impl/resource_building_manager',
        'managers/buildings/impl/facilities_building_manager',
        'managers/units/unit_manager',
        'managers/units/impl/defense_unit_manager',
        'managers/units/impl/shipyard_unit_manager'
    ]

    whitespace = re.compile(r'(?:\n+|\s{2,})')

    f = open('out/compiled.js', 'w')
    fm = open('out/compiled_min.js', 'w')

    for i in files:
        c = get_file_contents('src/' + i + '.js')
        f.write(c + "\n")
        fm.write(whitespace.sub('', c))

    f.close()

    print("done")

if __name__ == '__main__':
    main()
