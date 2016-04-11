'''
Helen Li
SoftDev2 pd3
HW08 -- List Comprehensions Practice
2016-04-07
'''   

def union(a, b):
    return [c
            for c in a] + [d for d in b if d not in a]

print "supposed to return: [1, 2, 35, 323, 34, 3, 4] / returns: " + str(union([1,2,35,323],[2,34,3,4]))

def intersection(a, b):
    return [c 
            for c in a
            if c in b]

print "supposed to return: [2, 3, 24] / returns: " + str(intersection([1,2,3,24,43],[2,3,4,24]))

def setDifference(a, b):
    return [c
            for c in a
            if c not in b]

print "supposed to return: [1] / returns: " + str(setDifference([1,2,3],[2,3,4]))
print "supposed to return: [2, 32] / returns: " + str(setDifference([2,32, 403],[123,323,403]))

def symmetricDifference(a,b):
    return [c
            for c in a
            if c not in b] + [d
                              for d in b
                              if d not in a]

print "supposed to return: [1, 4] / returns: " + str(symmetricDifference([1,2,3],[2,3,4]))

def symmetricDifference2(a,b):
    return union(setDifference(a,b),setDifference(b,a))

print "supposed to return: [1, 4] / returns: " + str(symmetricDifference2([1,2,3],[2,3,4]))

def CartesianProduct(a,b):
    return [(c,d)
            for c in a
            for d in b
            ]

print "supposed to return: (1, 'white'), (1, 'red'), (2, 'white'), (2, 'red') / returns: " + str(CartesianProduct([1,2],['white','red']))
