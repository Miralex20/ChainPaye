export function CodeSnippet() {
  return (
    <div className="bg-white/40  rounded-3xl p-8 border border-white/20">
      <div className="bg-background rounded-2xl p-4 ] font-mono text-sm overflow-x-auto">
        <div className="space-y-1 ">
          {/* Line 1 */}
          <div className="flex gap-4 bg-background">
            <span className="text-gray-400 select-none w-6 text-right">
              1
            </span>
            <div className="flex-1">
              <span className="text-[#AF00DB]">const</span>
              <span className="text-gray-800">
                {" "}
                Chainpaye ={" "}
              </span>
              <span className="text-[#AF00DB]">new</span>
              <span className="text-[#0066FF]">
                {" "}
                ChainpayeWidget
              </span>
              <span className="text-gray-800">
                (&#123;&#123;
              </span>
            </div>
          </div>

          {/* Line 2 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              2
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800">env: </span>
              <span className="text-[#0B8700]">
                "production"
              </span>
              <span className="text-gray-800">,</span>
            </div>
          </div>

          {/* Line 3 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              3
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800">action: </span>
              <span className="text-[#0B8700]">
                "send_payment"
              </span>
              <span className="text-gray-800">,</span>
            </div>
          </div>

          {/* Line 4 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              4
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800">
                fromCurrency:{" "}
              </span>
              <span className="text-[#0B8700]">"USD"</span>
              <span className="text-gray-800">,</span>
            </div>
          </div>

          {/* Line 5 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              5
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800">
                toCurrency:{" "}
              </span>
              <span className="text-[#0B8700]">"NGN"</span>
              <span className="text-gray-800">,</span>
            </div>
          </div>

          {/* Line 6 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              6
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800">apiKey: </span>
              <span className="text-[#0B8700]">
                "ck_live_B9rLJKSDxPqA9021x"
              </span>
              <span className="text-gray-800">,</span>
            </div>
          </div>

          {/* Line 7 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              7
            </span>
            <div className="flex-1">
              <span className="text-gray-800">&#125;,</span>
            </div>
          </div>

          {/* Line 8 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              8
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800">
                callback: &#123;
              </span>
            </div>
          </div>

          {/* Line 9 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              9
            </span>
            <div className="flex-1 pl-16">
              <span className="text-gray-800">
                onStatus: (status) =&gt; &#123;
              </span>
            </div>
          </div>

          {/* Line 11 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              11
            </span>
            <div className="flex-1 pl-24">
              <span className="text-gray-800">console.</span>
              <span className="text-[#795E26]">log</span>
              <span className="text-gray-800">(</span>
              <span className="text-[#0B8700]">
                "Payment status:"
              </span>
              <span className="text-gray-800">
                , status);
              </span>
            </div>
          </div>

          {/* Line 12 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              12
            </span>
            <div className="flex-1 pl-16">
              <span className="text-gray-800">&#125;</span>
            </div>
          </div>

          {/* Line 13 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              13
            </span>
            <div className="flex-1 pl-8">
              <span className="text-gray-800">&#125;</span>
            </div>
          </div>

          {/* Line 14 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              14
            </span>
            <div className="flex-1">
              <span className="text-gray-800">&#125;);</span>
            </div>
          </div>

          {/* Line 15 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              15
            </span>
            <div className="flex-1"></div>
          </div>

          {/* Line 16 */}
          <div className="flex gap-4">
            <span className="text-gray-400 select-none w-6 text-right">
              16
            </span>
            <div className="flex-1">
              <span className="text-gray-800">
                Chainpaye.
              </span>
              <span className="text-[#795E26]">open</span>
              <span className="text-gray-800">();</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
