## Helen Li
## SoftDev2 pd3
## HW07 -- Closures
## 2016-04-01

def inc(x):
    return x + 1

f = inc

print f(10)

def h(x):
    return lambda y: x + y

print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

c=h(1)
print str(c(3)) + " should return: " + str(h(1)(3))

def f(x):
    def g(y):
        return x+y
    return g

print f(1)
print f(2)
print f(1)(3)
print f(2)(5)


a=f(1)
b=h(1)

print a
print b


###########TASK############

def repeat(word):
    def r(num):
        ans='';
        for i in range(num):
            ans+=word
        return ans
    return r

#closures
r1=repeat('hello')
r2=repeat('goodbye')
    
print r1(2);
print r2(2);
print repeat('cool')(3)
