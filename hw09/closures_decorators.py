'''
Helen Li
SoftDev2 pd3
HW09 -- Closures and Decorators
2016-04-08
'''

import time, random

#quicksort works for repetitions too
def quickSort(l):
    if (len(l) <= 1):
        return l
    else:
        pivot = len(l)/2
        return quickSort([a 
                         for a in l 
                          if a < l[pivot]]) + [c for c in l if c==l[pivot]] + quickSort([b 
                                                                                         for b in l 
                                                                                         if b > l[pivot]])


print quickSort([3, 4, 5, 1, 2, 1, 1, 10, 42, 422134])


#didn't quite understand the example
'''
def wrapper( f ):
    def inner( args ):
        for arg in args:
            return f( arg )
    return inner

def foo(p):
    print p

#closure = wrapper(foo)
#closure( -2, 3, 'hello' )
'''


#done in class
def timer2(f):
    def inner(*arg):
        t = time.time()
        x = f(*arg)
        print "execution time: " + str(time.time()-t)
        return x
    return inner

@timer2
def randList(n, lower=-100, upper=100):
    l=[]
    for i in range(n):
        l.append(random.randrange(lower,upper))
    return l

#done at home
def timer(f):
    def inner():
        name=f()
        return str(time.time()) + "\n" + name
    return inner

def functionName(f):
    def inner():
        return str(f.func_name) + "\n" + f()
    return inner

@timer
@functionName
def get_name():
    names=['hello','bye']
    return random.choice(names)

name = get_name()
print name


#a simple example of applying multiple decorators
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML


