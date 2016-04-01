## Helen Li
## SoftDev2 pd3
## HW06 -- List Comprehensions
## 2016-03-31

## [ (x, x*x, x*x*x) for x in range(8) ]
## [x*x for x in range(8)]
## [ (x, x*x, x*x*x) for x in range(8) ]

## p="myNoobPass1234"

## [x for x in p] -> ['m', 'y', 'N', 'o', 'o', 'b', 'P', 'a', 's', 's', '1', '2', '3', '4']

## [x for x in "1234"] -> ['1', '2', '3', '4']

## UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

## [ x for x in p if x in UC_LETTERS ]   ->  ['N', 'P']

## [ 1 for x in p if x in UC_LETTERS ]   -> [1, 1]

## [ 1 if x in UC_LETTERS else 0 for x in p ]  -> [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]


def meetMinCriteria(password):
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lc_letters="abcdefghijklmnopqrstuvwxyz"
    numbers=[str(x) for x in range(10)]
    #print numbers
    
    lowerCase = [x for x in password if x in lc_letters]
    #print(lowerCase)
    upperCase = [x for x in password if x in UC_LETTERS]
    #print(upperCase)
    number = [x for x in password if x in numbers]
    #print(number)
    if (len(lowerCase) > 0 and len(upperCase) > 0 and len(number) > 0):
        return True
    return False

print(meetMinCriteria("hello"))
print(meetMinCriteria("Hello"))
print(meetMinCriteria("hello123"))
print(meetMinCriteria("Hello123"))


def passwordRating(password):
    rate = 0;
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lc_letters="abcdefghijklmnopqrstuvwxyz"
    numbers=[str(x) for x in range(10)]
    nonalphas=['.','?', '!', '&', '#', ',', ';', ':', '-', '_', '*']
    if(meetMinCriteria(password)):
        rate+=2
    lowerCase = [x for x in password if x in lc_letters]
    upperCase = [x for x in password if x in UC_LETTERS]
    number = [x for x in password if x in numbers]
    nonalpha = [x for x in password if x in nonalphas]
    print nonalpha
    if (len(lowerCase) > 4):
        rate+=1
    if(len(upperCase) > 3):
        rate+=2;
    if(len(number) > 3):
        rate+=2
    if(len(nonalpha)>0):
        rate+=3;
    return rate
    
        

print(passwordRating("Hello123"))
print(passwordRating("gnkjsdnvkjsnNDAKJNVK1345@$#%"))
