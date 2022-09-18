import math
import time

def prime_number(num_of_numbers):
    start = time.time()
    arr_prime_num = [2]
    next_prime_num = 1
    while (len(arr_prime_num) < num_of_numbers):
        next_prime_num = next_prime_num + 2
        prime_flag = True
        limit_num = math.floor(math.sqrt(next_prime_num))
        i=0
        while  (i <= len(arr_prime_num)-1 and arr_prime_num[i] <= limit_num):
            if (next_prime_num % arr_prime_num[i] == 0):
                prime_flag = False
                break
            i += 1
        if (prime_flag == True):
            arr_prime_num.append(next_prime_num)
    end = time.time()
    during_time = (end-start)*10**3
    return (during_time)


if __name__ == '__main__':
    print(prime_number(1000000))

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
