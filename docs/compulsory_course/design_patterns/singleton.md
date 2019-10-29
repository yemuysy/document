# 单例模式

所谓的单例模式，就是采取一定的方法，保证整个软件系统中，对某个类只能存在一个实例，并且该类只提供一个能取得其对象实例的方法（静态方法）。

单例模式有八种方式：

1. 饿汉式（静态常量）
2. 饿汉式（静态代码块）
3. 懒汉式（线程不安全）
4. 懒汉式（线程安全，同步方法）
5. 懒汉式（线程安全，同步代码块）
6. 双重检查
7. 静态内部类
8. 枚举

## 1. 饿汉式（静态常量）

实现思路：

1. 构造器私有化（防止 new）
2. 类的内部创建对象
3. 向外暴露一个静态的共有方法。

```java
public class Singleton{
    private Singleton(){}
    private final static Singleton instance = new Singleton();
    public static Singleton getInstance(){ 
        return instance;
    }
}
```

优缺点：

1. 有点：写法简单，就是在类加载的时候完成实例化，避免了线程同步问题
2. 缺点：在类加载的时候就完成实例化，没有达到 Lasy Loading 的效果。如未使用该类，则会造成内存浪费。
3. 这种方法基于 classloder 机制避免了多线程同步问题。

## 2. 饿汉式（静态代码块）

```java
public class Singleton{
    private Singleton(){}
    private final static Singleton instance;
    static {
		instance = new Singleton();
    }
    public static Singleton getInstance(){
        return instance;
    }
}
```

优缺点

1. 这种也是基于类加载机制进行实例化，优缺点同上。

## 3. 懒汉式（线程不安全）

```java
public class Singleton{
    private Singleton(){}
    private final static Singleton instance;
    public static Singleton getInstance(){
        if (instance == null) {
            instance = new new Singleton();
        }
        return instance;
    }
}
```

优缺点

1. 起到了 Lazy Loading 的效果，但只能在单线程下使用。
2. 多线程下，如果有一个线程进入 if (instance == null) 判断语句块，还未来得及往下执行，另一个线程也通过了这个判断，这时就会产生多例

## 4. 懒汉式（线程安全，同步方法）

```java
public class Singleton{
    private Singleton(){}
    private final static Singleton instance;
    public  static synchronized Singleton getInstance(){
        if (instance == null) {
            instance == new Singleton();
        }
        return instance;
    }
}
```

优缺点

1. 解决了线程安全问题
2. 效率低。每次取都得调用同步方法，效率低下。

## 5.懒汉式（线程安全，同步代码块）【不可用】

```java
public class Singleton{
    private static Singleton instance;
    private Singleton(){}
    public static Singleton getInstance(){
        if(instance == null){
            synchronized(Singleton.class){
                instance == new Singleton();
            }
        }
        return instance;
    }
}
```

线程不安全，同时进入if语句时，就会有问题

## 6.双重检查锁

```java
public class Singleton{
	private Singleton(){}
    private final volatile Singleton instance;
    public  static Singleton getInstance(){
       if (instance == null) {
            synchronized(Singleton.class){
            	if(instance == null) {
                	instance == new Singleton();
				}
            }
        }
        return instance;
    }
}
```

Double-Check 双重检查，保证线程安全

## 7. 静态内部类

```java
public class Singleton{
    private Singleton(){}
    private static class SingletonInstance {
        private static final Singleton instance = new Singleton();
    }
    pubic static Singleton getInstance(){
        return SingletonInstance.instance;
    }
}
```

这种和饿汉式采用机制类似，都是采用了类装载的机制，保证了初始化实例时只有一个线程，不同的地方在于静态内部类在 Singleton 类被装载时，并不会立即实例化，只有在需要调用 getInstance 方法时，才会装载 SingletonInstance，从而实例化。

## 8. 枚举

```java
public enum Singleton{
    INSTANCE;
    public void method(){}
}
```

这种方式借助了 JDK1.5 中新添加的枚举实现的，不仅能避免多线程问题，还能防止反序列哈重新创建新的对象