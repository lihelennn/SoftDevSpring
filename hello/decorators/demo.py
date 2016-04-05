def inc(x):
    return x+1

def dec(x):
    return x-1

f = inc
print f(5)

flist = [inc, dec]

print flist[1](5)


#a simple closure in Python
def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)
print add3(10)
print add5(10)
#A py fxn can be written so as to build and return another fxn

#not a closure
def make_counter():
    # private "instance" data
    # hads to be a lust due to weird pythn croping rules
    count = [0]

    #public methods
    def inc():
        count[0]=count[0]+1
    def dec():
        count[0]=count[0]-1
    def reset():
        count[0]=0
    def get():
        return count[0]

    #return a dictionary so we have access to all the methods
    return {"inc":inc, "dec":dec, "reset":reset, "get":get}

c1=make_counter()
c2=make_counter()

c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']()

c2['inc']()
print c2['get']()

c1['reset']()
print c1['get']()


import random
def get_name():
    names=['tom','sue','henry','lisa','sarah','horatio']
    return random.choice(names)

'''
Suppose many calls to get_name throughout the code
Suppose want to double name each time used
A "traditional" way of doing this mught be:
'''

#not a closure because there is no inner fxn
def dble(f):
    name=f()
    return name+name
print dble(get_name)

#not a closure (no variable inner fxn)
def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner
print doubler(get_name)

@doubler
def get_name():
    names=['tom','sue','henry','lisa','sarah','horatio']
    return random.choice(names)

print get_name()

'''
@doubler
def get_name():
    <code>

^^^ equivlent to get_name=doubler(get_name)

TAKEAWAY:
BAM! can write fxns that transform fxns

A Python decorator is merely shorthand for calling a wrapper-type function like doubler.

A Python decorator encapsulates a closure

A decorates allows to transparently wrap functionality

'''

#this function is needed to create the decorator
#this is the wrapper function for get_name
def htmler(f):
    def inner():
        name=f()
        return "<html>"+name+"</html>"
    return inner

@htmler
def get_name():
    names=['hello','bye']
    return random.choice(names)

print get_name()
    
