'''
AIM: "Memorization[:4]+"Memorization"[5:]

'''

def fib(n):
    if n < 2:
        return n
    else:
        return fib(n-1) + fib(n-2)

print fib(3)
print fib(5)
print fib(6)

'''
DYNAMIC PROaGRAMMING
aka Dynamic Optimization
Means of solving a complex problem by solving its component problems just once and storing its solutions

MEMOIZATION
Technique of storing solutions to subproblems to avoid recomptation
or
Use of caches (a place used to store stuff) to retrieve prviously computer values to reduce time complexity of algorithms

'''

#Rewrite fib(n) to employ dynamic programming
def fib2(n):
    stored={}
    if n<2:
        return n
    elif n in stored.keys():
        return stored[n]
    else:
        stored[n]=fib(n-1)+fib(n-2)
        return stored[n]

print fib2(3)
print fib2(5)


def memoize(f):
    memo={} #hashmap/dict for O(1) lookup
    def inner(x):
        if x not in memo:
            memo[x]=f(x)
        return memo[x]
    return inner

fib3 = memoize(fib)

print fib3(2)
print fib3(5)
print fib3(10)

@memoize
def fib4(n):
    if n<2:
        return n
    else:
        return fib4(n-1)+fib4(n-2)

print fib4(5)
print fib4(6)
print fib4(10)


