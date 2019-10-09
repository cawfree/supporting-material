module.exports = `
package io.github.cawfree.reactadvanced;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

@ReactModule(name = NativeThreads.REACT_CLASS)
public class NativeThreads extends ReactContextBaseJavaModule {

  public static final String REACT_CLASS = "NativeThreads";

  private static final ExecutorService EXECUTOR_SERVICE = Executors
    .newFixedThreadPool(5);

  @ReactMethod
  public void doSomethingIntense(
    final ReadableMap pReadableMap,
    final Promise pPromise
  ) {
    // Post a new Runnable for execution.
    NativeThreads.EXECUTOR_SERVICE
      .execute(
        new Runnable() { @Override public final void run() {
          // Your intense operation here!
          final WriteableMap lWriteableMap = new WriteableMap();
          // Return the result to the caller.
          pPromise
            .resolve(
              lWriteableMap
            );
        } },
      );
  }
}
`;
