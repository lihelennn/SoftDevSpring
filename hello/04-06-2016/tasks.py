'''
Tasks:
1. All Pythagorean Triples
2. All Pythagorean Triples -- List Comprehension
3. Quicksort -- List Comprehension
   -Pick a pivot
   -Partition into 2 lists, s.t.

      -all values < p are in L.H.
      -all values > p are in U.H.
      -pivot in Final Resting Position

    -Qsort(LH)+Qsort(UH)
   
Tuples = immutable list

'''

import random

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

def quickSort2(l):
    if len(l) <= 1:
        return l
    pivot = random.choice(l)
    lh = [x for x in l if x<pivot]
    uh = [y for y in l if y>pivot]
    return quickSort2(lh) + [z for z in l if z==pivot] + quickSort2(uh)

print quickSort2([4,3,5,2,6])

def pt0(n):
    ans=[]
    for i in range(n):
        sub=[]
        for ii in range(n):
            a = i**2 - ii**2
            b = 2 * i * ii
            c = i**2 + ii**2
            if (a>0 and b>0 and c>0 and a<=n and b<=n and c<=n):
                ans.append([a,b,c])
    return ans

def pt(n):
    ans=[]
    for a in range(1,n):
        for b in range(a+1,n):
            for c in range(b+1,n):
                if a*a + b*b == c*c:
                    ans.append([a,b,c])
    return ans

print pt0(5)
print pt0(3)
print pt0(10)

print pt(5)
print pt(3)
print pt(10)
print pt0(100)
print pt(100)


def pt2(n):
    return [(a,b,c)
            for a in range(1,n)
            for b in range(a+1,n)
            for c in range(b+1,n)
            if a*a + b*b == c*c]

print pt2(5)


