// TODO: Use Unicode characters: ■ and □

bitmap_3x5_source = {
  ' ':
    ["   ",
     "   ",
     "   ",
     "   ",     
     "   "],

  '0':
    ["ooo",
     "o o",
     "o o",
     "o o",
     "ooo"],

  '1':
    ["  o",
     "  o",
     "  o",
     "  o",
     "  o"],

  '2':
    ["ooo",
     "  o",
     "ooo",
     "o  ",     
     "ooo"],

  '3':
    ["ooo",
     "  o",
     "ooo",
     "  o",     
     "ooo"],

  '4':
    ["o o",
     "o o",
     "ooo",
     "  o",     
     "  o"],

  '5':
    ["ooo",
     "o  ",
     "ooo",
     "  o",     
     "ooo"],

  '6':
    ["ooo",
     "o  ",
     "ooo",
     "o o",     
     "ooo"],

  '7':
    ["ooo",
     "  o",
     "  o",
     "  o",
     "  o"],

  '8':
    ["ooo",
     "o o",
     "ooo",
     "o o",
     "ooo"],

  '9':
    ["ooo",
     "o o",
     "ooo",
     "  o",
     "  o"]
}
    
bitmap_3x5 = load_bitmap(bitmap_3x5_source);