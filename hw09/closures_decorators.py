'''
Helen Li
SoftDev2 pd3
HW09 -- Closures and Decorators
2016-04-08
'''

import time, random

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


