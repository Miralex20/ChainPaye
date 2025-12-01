export function CodeSnippet() {
  return (
    <div className="bg-white/40 dark:bg-transparent rounded-3xl p-8 border border-white/20 dark:border-white/10">
      <div className="bg-[#F5F5F7] dark:bg-[#1E1E1E] rounded-2xl p-6 font-mono text-sm overflow-x-auto">
        <div className="space-y-1">
          {/* Line 1 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              1
            </span>
            <div className="flex-1">
              <span className="text-[#AF00DB] dark:text-[#C586C0]">const</span>
              <span className="text-gray-800 dark:text-gray-300">
                {" "}
                Chainpaye ={" "}
              </span>
              <span className="text-[#AF00DB] dark:text-[#C586C0]">new</span>
              <span className="text-[#0066FF] dark:text-[#4FC1FF]">
                {" "}
                ChainpayeWidget
              </span>
              <span className="text-gray-800 dark:text-gray-300">
                (&#123;&#123;
              </span>
            </div>
          </div>

          {/* Line 2 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              2
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800 dark:text-gray-300">env: </span>
              <span className="text-[#0B8700] dark:text-[#CE9178]">
                "production"
              </span>
              <span className="text-gray-800 dark:text-gray-300">,</span>
            </div>
          </div>

          {/* Line 3 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              3
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800 dark:text-gray-300">action: </span>
              <span className="text-[#0B8700] dark:text-[#CE9178]">
                "send_payment"
              </span>
              <span className="text-gray-800 dark:text-gray-300">,</span>
            </div>
          </div>

          {/* Line 4 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              4
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800 dark:text-gray-300">
                fromCurrency:{" "}
              </span>
              <span className="text-[#0B8700] dark:text-[#CE9178]">"USD"</span>
              <span className="text-gray-800 dark:text-gray-300">,</span>
            </div>
          </div>

          {/* Line 5 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              5
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800 dark:text-gray-300">
                toCurrency:{" "}
              </span>
              <span className="text-[#0B8700] dark:text-[#CE9178]">"NGN"</span>
              <span className="text-gray-800 dark:text-gray-300">,</span>
            </div>
          </div>

          {/* Line 6 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              6
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800 dark:text-gray-300">apiKey: </span>
              <span className="text-[#0B8700] dark:text-[#CE9178]">
                "ck_live_B9rLJKSDxPqA9021x"
              </span>
              <span className="text-gray-800 dark:text-gray-300">,</span>
            </div>
          </div>

          {/* Line 7 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              7
            </span>
            <div className="flex-1">
              <span className="text-gray-800 dark:text-gray-300">&#125;,</span>
            </div>
          </div>

          {/* Line 8 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              8
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800 dark:text-gray-300">
                callback: &#123;
              </span>
            </div>
          </div>

          {/* Line 9 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              9
            </span>
            <div className="flex-1 pl-16">
              <span className="text-gray-800 dark:text-gray-300">
                onStatus: (status) =&gt; &#123;
              </span>
            </div>
          </div>

          {/* Line 11 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              11
            </span>
            <div className="flex-1 pl-24">
              <span className="text-gray-800 dark:text-gray-300">console.</span>
              <span className="text-[#795E26] dark:text-[#DCDCAA]">log</span>
              <span className="text-gray-800 dark:text-gray-300">(</span>
              <span className="text-[#0B8700] dark:text-[#CE9178]">
                "Payment status:"
              </span>
              <span className="text-gray-800 dark:text-gray-300">
                , status);
              </span>
            </div>
          </div>

          {/* Line 12 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              12
            </span>
            <div className="flex-1 pl-16">
              <span className="text-gray-800 dark:text-gray-300">&#125;</span>
            </div>
          </div>

          {/* Line 13 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              13
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800 dark:text-gray-300">&#125;</span>
            </div>
          </div>

          {/* Line 14 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              14
            </span>
            <div className="flex-1">
              <span className="text-gray-800 dark:text-gray-300">&#125;);</span>
            </div>
          </div>

          {/* Line 15 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              15
            </span>
            <div className="flex-1"></div>
          </div>

          {/* Line 16 */}
          <div className="flex gap-4">
            <span className="text-gray-400 dark:text-gray-600 select-none w-6 text-right">
              16
            </span>
            <div className="flex-1">
              <span className="text-gray-800 dark:text-gray-300">
                Chainpaye.
              </span>
              <span className="text-[#795E26] dark:text-[#DCDCAA]">open</span>
              <span className="text-gray-800 dark:text-gray-300">();</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
